## 测试异步行为

在编写测试代码时你将会遇到两种异步行为：

1. 来自 Mpx 的更新
2. 来自外部行为的更新

## 来自 Mpx 的更新

Mpx 会异步的将未生效的 DOM 批量更新，避免因数据反复变化而导致不必要的渲染。

在实践中，这意味着变更一个响应式 property 之后，为了断言这个变化，你的测试需要等待 Vue 完成更新。其中一种办法是使用 `await mpx.nextTick()`。

```js
// 在测试框架中，编写一个测试用例
it('button click should increment the count text', async () => {
  expect(comp.dom.innerText).toContain('0')
  const button = comp.querySelector('button')
  button.dispatchEvent('tap')
  await comp.instance.$nextTick()  
  expect(comp.dom.innerText).toContain('1')
})
```

## 来自外部行为的更新

项目开发中最常见的一种异步行为就是在 Store 中进行 API 调用。以下示例将展示如何测试在 Store 中进行 API 调用的方法。

`axios` mock 的实现如下所示：

```js
export default {
  get: () => Promise.resolve({ data: 'value' })
}
```

当按钮被点击时，组件将会产生一个 API 调用，并且将响应的返回内容赋值给 `value`。

```html
<template>
  <button bindtap="fetchResults">{{ value }}</button>
</template>

<script>
  import {createComponent} from '@mpxjs/core'

  createComponent({
    data: {
        value: 0
    },
    methods: {
      async fetchResults() {
        const response = await mpx.xfetch.fetch({
            url: 'some/url'
        })
        this.value = response.data
      }
    }
  })
</script>
```

可以这样编写测试：

```js
import { createCompAndAttach, proxyFetch } from '@mpxjs/test-utils'

proxyFetch('some/url', {
    data: 3,
    statusCode: 200
})

it('fetches async when a button is clicked', async () => {
    const comp = createCompAndAttach(compPath)
    expect(comp.dom.innerText).toContain('0')
    const button = comp.querySelector('button')
    button.dispatchEvent('tap')
    await comp.instance.$nextTick()
    expect(comp.dom.innerText).toContain('3')
})
```

上面的代码代码会执行失败，这是因为我们在 `fetchResults` 方法执行完毕前就对结果进行断言。绝大多数单元测试框架都会提供一个回调来通知你测试将在何时完成。Jest 和 Mocha 都使用`done` 这个方法。我们可以将 `done` 与 `$nextTick` 或 `setTimeout` 结合使用，以确保在进行断言前已经处理完所有的 Promise 回调。

```js

it('fetches async when a button is clicked', async (done) => {
    const comp = createCompAndAttach(compPath)
    expect(comp.dom.innerText).toContain('0')
    const button = comp.querySelector('button')
    button.dispatchEvent('tap')
    comp.instance.$nextTick(() => {
        expect(comp.dom.innerText).toContain('3')
        done()
    })
})
```

setTimeout 也可以使测试通过的原因是，Promise 回调的微任务队列会在 setTimeout 回调的（宏）任务队列之前执行。这意味着当 setTimeout 回调执行时，微任务队列上的所有 Promise 回调已经被执行过了。另一方面，`$nextTick` 也存在调度微任务的情况，但是由于微任务队列是先进先出的，因此也保证了在进行断言时已经处理完所有的 Promise 回调。

另外一个使用 `async` 方法的解决方案是使用类似 [flush-promises](https://www.npmjs.com/package/flush-promises) 的包。`flush-promises` 会刷新所有处于 pending 状态或 resolved 状态的 Promise。你可以用 `await` 语句来等待 `flushPromises` 刷新 Promise 的状态，这样可以提升你代码的可读性。

修改以后的测试代码：

```js
import { createCompAndAttach, proxyFetch } from '@mpxjs/test-utils'
import flushPromises from 'flush-promises'

proxyFetch('some/url', {
    data: 3,
    statusCode: 200
})

it('fetches async when a button is clicked', async () => {
    const comp = createCompAndAttach(compPath)
    expect(comp.dom.innerText).toContain('0')
    const button = comp.querySelector('button')
    button.dispatchEvent('tap')
    await flushPromises()
    expect(comp.dom.innerText).toContain('3')
})
```

相同的技术细节也可以应用在处理 Store 的 action 上。

## 关于代码中的setTimeout
当我们代码中存在一些使用定时器的逻辑时，例如10s后定时将showA修改为true
```js
function changeShowA () {
    setTimeout(() => {
        this.showA = true
    }, 10000)
}
```

在对这部分逻辑进行用例编写时，我们不可能去真的等待10s，这样会导致我们测试用例执行很是耗时，所以这里我们需要用到定时器mock功能

```js
it('some defer click trigger', async () => {
    // 先将全局setTimeout进行sypOn
    jest.useFakeTimers()
    jest.spyOn(global, 'setTimeout')
    const comp = createCompAndAttach(compPath)
    comp.instance.changeShowA()
    // 执行所有定时器
    jest.runAllTimers()
    expect(comp.instance.showA).toBe(true)
    // 还原定时器
    jest.useRealTimers()
})
```

# 起步

## 搭建项目

快速尝鲜单元测试的办法就是克隆我们的 demo 仓库再加上基本的设置和依赖安装。

```bash
git clone https://github.com/Blackgan3/mpx-unit-test-demo
cd mpx-unit-test-demo
npm install
```
或者如果你是老的项目，也可以按照我们[安装与配置章节]()对项目进行相关配置来支持单测的书写

## 工具文档
"工欲善其事，必先利其器"，书写小程序单元测试之前，我们需要熟读和单元测试相关API的各种使用文档

首先我们需要熟悉的是 Jest 单测框架的相关 API 的使用，此外就是 expect 断言的相关语法，这些已经是
现成的官方文档，我们就不进行一一介绍了，在开始写单测前请先阅读 [Jest]() 文档

此外如何渲染组件以及组件封装实例的相关操作 API 我们将在本文档的 [API 章节]()进行介绍，在写单测前，也可先去对应的 API 章节进行
文档阅读。

## 渲染挂载组件

Mpx Test Utils 对微信小程序自定义组件测试工具集 miniprogram-simulate 进行了一层封装，补充了许多便于单测书写的工具方法以及
扩展了loadMpx等方法支持Mpx组件的渲染和挂载

我们对小程序组件进行隔离挂载，然后模拟必要的输入 (props、注入和用户事件) 和对输出 (渲染结果、触发的自定义事件) 的断言来测试 Mpx 小程序组件。

被挂载的组件会返回到一个[封装实例](../api/wrapper/)内，该实例会暴露很多封装、遍历和查询其内部的 Mpx 子组件实例的便捷的方法。

你可以通过 `createComp`或者 `createCompAndAttach` 方法来创建包裹器。让我们创建一个名叫 `test.js` 的文件：

```js
// test.js

// 从测试实用工具集中导入 `createCompAndAttach` 方法
// 同时声明出要测试组件的路径
import { createCompAndAttach } from '@mpx/test-utils'
const compPath = 'src/somePack/compA.mpx'

// 渲染并挂载组件，现在你便得到了这个组件实例包裹对象
const comp = createCompAndAttach(compPath)

// 你可以通过 `comp.instance` 访问实际的 Mpx 组件实例
const ins = comp.instance

// 可以通过 `comp.dom` 访问实际的 Mpx 组件的 dom 对象
const domHTML = comp.dom.innerHTML
```

## 测试组件渲染出来的 HTML

现在我们已经有了Mpx组件的包裹器，这里我们首先可以做的就是对组件的HTML进行断言预期。

```js
import { createCompAndAttach } from '@mpx/test-utils'
const compPath = 'src/somePack/compA.mpx'

describe('CompA', () => {
    // 渲染并挂载组件，现在你便得到了这个组件实例包裹对象
    const comp = createCompAndAttach(compPath)
    const domHTML = comp.dom.innerHTML
  it('dom render swiper comp correct', () => {
    expect(domHTML).toContain('<swiper>')
  })

  // 也便于检查已存在的元素
  it('has a icon', () => {
      expect(domHtml.includes('<mpx-icon')).toBeFalsy()
  })
})
```

现在运行 `npm test` 进行测试。你应该看得到测试通过。

至此，我们进行了工具仓库相关文档的阅读，完成了组件的渲染挂载，并拿到了组件包裹器。


----

下方部分移动到测试技巧中

## 模拟用户交互

当用户点击按钮的时候，我们的计数器应该递增。为了模拟这一行为，我们首先需要通过 `wrapper.find()` 定位该按钮，此方法返回一个**该按钮元素的包裹器**。然后我们能够通过对该按钮包裹器调用 `.trigger()` 来模拟点击。

```js
it('button click should increment the count', () => {
  expect(wrapper.vm.count).toBe(0)
  const button = wrapper.find('button')
  button.trigger('click')
  expect(wrapper.vm.count).toBe(1)
})
```

为了测试计数器中的文本是否已经更新，我们需要了解 `nextTick`。

## 使用 `nextTick` 与 await

任何导致操作 DOM 的改变都应该在断言之前 await `nextTick` 函数。因为 Vue 会对未生效的 DOM 进行批量*异步更新*，避免因数据反复变化而导致不必要的渲染。

_你可以阅读[Vue 文档](https://cn.vuejs.org/v2/guide/reactivity.html#异步更新队列)了解更多关于异步指更新的信息。_

在更新响应式 property 之后，我们可以直接 await 类似 `trigger` 或 `trigger.vm.$nextTick` 方法，等待 Vue 完成 DOM 更新。在这个计数器的示例中，设置 `count` property 会在运行下一个 tick 之后引发 DOM 变化。

我们看看如何在测试中撰写一个 async 函数并 `await trigger()`：

```js
it('button click should increment the count text', async () => {
  expect(wrapper.text()).toContain('0')
  const button = wrapper.find('button')
  await button.trigger('click')
  expect(wrapper.text()).toContain('1')
})
```

`trigger` 返回一个可以像上述示例一样被 await 或像普通 Promise 回调一样被 `then` 链式调用的 Promise。诸如 `trigger` 的方法内部仅仅返回 `Vue.nextTick`。你可以在[测试异步组件](../guides/README.md#测试异步组件)了解更多。

当你在测试代码中使用 `nextTick` 时，请注意任何在其内部被抛出的错误可能都不会被测试运行器捕获，因为其内部使用了 Promise。关于这个问题有两个建议：要么你可以在测试的一开始将 Vue 的全局错误处理器设置为 `done` 回调，要么你可以在调用 `nextTick` 时不带参数让其作为一个 Promise 返回：

```js
// 错误不会被捕获
it('will time out', done => {
  Vue.nextTick(() => {
    expect(true).toBe(false)
    done()
  })
})

// 接下来的三项测试都会如预期工作
it('will catch the error using done', done => {
  Vue.config.errorHandler = done
  Vue.nextTick(() => {
    expect(true).toBe(false)
    done()
  })
})

it('will catch the error using a promise', () => {
  return Vue.nextTick().then(function() {
    expect(true).toBe(false)
  })
})

it('will catch the error using async/await', async () => {
  await Vue.nextTick()
  expect(true).toBe(false)
})
```

## 接下来

- 移步[编写测试的常见技巧](./README.md#明白要测试的是什么)以学习更多。
- [基础工具选择](./README.md#选择一个测试运行器)以把 Vue Test Utils 集成到你的工程里。
- 学习更多[异步测试行为](./README.md#异步测试行为)

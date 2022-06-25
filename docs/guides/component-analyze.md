# 常见技巧

## 要对组件的哪些地方进行测试
在对一个组件写单测之前，我们希望对组件的作用以及组件的内部逻辑进行分析，首先组件内的响应性数据来源分为外部传递
和自身内部生成两种情况，响应性逻辑包括computed、watch、methods等。

此外单测环境下运行组件和我们项目正常在小程序中运行中的最大区别，就是组件的各种状态需要进行手动初始化或mock，此外组件
的数据响应以及更新逻辑无需你做任何操作。

![组件分析图](https://dpubstatic.udache.com/static/dpubimg/UXcaYUAzeYJJPAz0O1BUp.png)

对于前端组件而言，我们并不需要追求每一行代码的绝对覆盖率，这里我们需要关注组件依赖的属性变化以及组件自身属性变化后
，断言组件dom变化，或者是组件内部依赖这些响应式属性的副作用逻辑执行结果即可。

此外，除了组件内部各种响应性状态的变化，组件内部事件的触发也需要进行断言覆盖，这里我们无需去断言事件方法内部的执行逻辑，
只需对不同的输入去断言不同的输出即可。

如果一个组件是一个纯UI组件，它只接收 props 输入然后根据 props 去渲染页面，那只需要初始化不同的props，然后进行 dom 预期即可。

所以我们对一个组件的单测大概分为一下几个方面：

* 组件初始化各种形态
* 组件内部响应性数据变化
* 组件内部事件触发

## 仿造properties
很多时候组件都依赖于外部传递的响应性properties来进行自身逻辑的执行和展示判断等，那么单测时我们进行对组件的properties进行
各种形态的仿造，这里只需要在渲染挂载组件实例时进行props的传递即可

```js

import { createCompAndAttach } from '@mpx/test-utils'
const compPath = 'src/somePack/compA.mpx'

const successContent = 'some successContent'

describe('CompA', () => {
    // 渲染并挂载组件，现在你便得到了这个组件实例包裹对象
    const comp = createCompAndAttach(compPath, {
        successContent
    })
    const domHTML = comp.dom.innerHTML
    it('props correct', () => {
        //...
    })
})
```

## 生命周期钩子
每个组件内都会有对应的生命周期钩子注册，当我们使用`createCompAndAttach`渲染挂载组件时，将会自动执行组件内的create、
attached、ready 生命周期钩子。

假如你在初始化生命周期中有相应的接口请求逻辑需要mock或者其他需要执行mock的逻辑的话，这里可以有两种方式进行

1.在渲染挂载组件之前进行数据mock
```js
import { createCompAndAttach, proxyFetch} from '@mpx/test-utils'
const compPath = 'src/somePack/compA.mpx'
const successContent = 'some successContent'

describe('CompA', () => {
    // 组件attached钩子中有对应的接口请求,提前进行接口请求mock
    proxyFetch('some/api', {
        data: {a: 1},
    })
    const comp = createCompAndAttach(compPath)
    // ...
})
```

2.使用createComp Api来进行组件实例的创建，**使用createComp需要手动进行组件挂载**
```js
import { createComp, proxyFetch} from '@mpx/test-utils'
const compPath = 'src/somePack/compA.mpx'
const successContent = 'some successContent'

describe('CompA', () => {
    const comp = createComp(compPath)
    // 组件attached钩子中有对应的接口请求,mock后再进行组件挂载
    proxyFetch('some/api', {
        data: {a: 1},
    })
    comp.attach(document.body)
    // ...
})
```
对于 moved, detached 钩子我们需要使用triggerLifeTime手动进行触发

```js
comp.triggerLifeTime('moved', {test: 'xxx'})

comp.triggerLifeTime('detached', {test: 'xxx'})
```

### 操作组件响应性数据
组件中的响应性数据我们可以通过组件实例直接进行操作更改

```js
it('change someDataA true', async () => {
    comp.instance.someDataA = true
    // ...
})
```
## 接口请求mock
组件中的各种逻辑很多时候都离不开请求接口返回的数据，对于接口请求，在单测场景下，
很多时候我们并不需要真实的向服务端发起请求，只需要对接口请求代理，直接mock返回你所需要的数据就可

这里我们的 proxyFetch Api 只

```js
import {proxyFetch} from '@mpx/test-utils'

// 代码中再去请求 some/api 接口就会返回我们mock的数据
proxyFetch('some/api', {
    data: {a: 1},
})

```

## 事件触发
组件中的事件大体分为以下几种:
* 生命周期钩子或watch监听回调中触发(无需在单测中手动触发)
* 组件模版中的bind事件，如：tap、touchStart等
* 提供给子组件的事件，业务运行时需要子组件triggerEvent执行的

针对第2、3中情况需要我们在单测试中进行手动触发
```html
<template>
  <view class="list">
    <view class="changeFlagClass" bindtap="changeSomeShow">change SomeClassShowTwoFlag</view>
    <list class="someTimeDeferActionClass" bindTextChange="textChange"></list>
    <view wx:if="{{someShow}}">展示一些东西</view>
  </view>
</template>
<script >
    import {createComponent} from '@mpxjs/core'
    createComponent({
        data: {
            someShow: false
        },
        methods: {
            changeSomeShow() {
                this.someShow = true
            },
            textChange() {
                console.log('子组件触发')
            }
        }
    })
</script>
```

```js
import {createCompAndAttach} from '@mpxjs/test-utils'

describe('some comp list', () => {
    let comp = null
    const compPath = 'xxxxx'
    beforeAll(() => {
        comp = createCompAndAttach(compPath)
    })
    it('should changeSomeShow trigger', async function () {
        const childComp = comp.querySelector('.changeFlagClass')
        childComp.dispatchEvent('tap')
        await comp.instance.$nextTick()
        // ... 组件dom的一些断言
    });
    
    it('should textChange trigger', async () => {
        // 这里我们可以直接进行事件的触发，无需通过子组件triggerEvent触发
        comp.instance.textChange('xxx')
    })
})

```

## 使用nextTick
Mpx中通过队列异步批量的进行各个更新副作用的执行，这意味着当我们修改了影响 DOM 更新的响应性变量后，需要进行等待当前tick执行完，
才能对组件进行断言，这里我们可以使用 nextTick

```js
it('update some data', async () => {
    const comp = createCompAndAttach(compPath)
    comp.instance.someDataA = 'show text'
    await comp.instance.$nextTick()
    expect(comp.dom.innerHTML).toContain('show text')
})
```
## mock 子组件
在测试组件的过程中，我们一般只需要关注与当前的目标组件即可，而对于它的子组件的逻辑我们其实并不关心。

此外如果该组件包含了大量的自组件，会让整个渲染树变得很大，让我们的测试用例执行较慢。

我们在Mpx test Utils 中提供了mockComponents Api 来让你可以对所有的子组件进行mock。

**注意：**

这里的组件mock执行需要放在组件渲染挂载执行，不然mock不会生效。

```js
import {mockComponents} from '@mpxjs/test-utils'
describe('CompA', () => {
    mockComponents({
        'some-comp-a': {
            template: '<view>some comp a</view>'
        }
    })
    const comp = createCompAndAttach(compPath)
    //...
})
```

### 应用全局的插件
在项目中我们会用到各种个样的全局插件，比如@mpxjs/mpx-fetch、@mpxjs/api-proxy等，在单测环境下，我们需要在
测试入口进行一次性设置，这里我们放置在 Jest 提供的 setup入口文件中。

```js
// test/setup.js
import apiProxy from '@mpxjs/api-proxy'
import mpx from '@mpxjs/core'

mpx.use(apiProxy, {
    usePromise: true,
    optimize: true
})
```



# RootComponent

`RootComponent` 是一个对象，该对象包含了一个挂载的小程序组件，以及测试该组件的方法。

## 属性

### `instance`

`Component` (只读)：这是该小程序组件实例。你可以通过 `comp.instance` 访问一个小程序组件实例所有的 [方法和属性](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html) 。

### `dom`

`HTMLElement` (只读)：渲染小程序组件的 DOM 节点

### `data`

`Object` (只读)：组件实例对应的 data 对象

## 方法

#### querySelector(selector)

获取符合给定匹配串的第一个节点，返回 Component 实例。

> PS：支持 selector 同小程序自定义组件的 selectComponent 接口

```js
const childComp = comp.querySelector('#a')
```

#### querySelectorAll(selector)

获取符合给定匹配串的所有节点，返回 Component 实例列表

> PS：支持 selector 同小程序自定义组件的 selectAllComponents 接口

```js
const childComps = comp.querySelectorAll('.a')
```

#### dispatchEvent(eventName, options)

用于模拟触发该组件实例节点上的事件。

```js
// 触发组件树中的节点事件
comp.dispatchEvent('touchstart', {
  touches: [{ x: 0, y: 0 }],
  changedTouches: [{ x: 0, y: 0 }],
})

// 触发组件树中的节点自定义事件
comp.dispatchEvent('customevent', {
  touches: [{ x: 0, y: 0 }],
  changedTouches: [{ x: 0, y: 0 }],
  /* 其他 CustomEvent 构造器支持的 option */
})
```

#### addEventListener(eventName, handler, useCapture)

用于外部监听组件触发的事件。

```js
comp.addEventListener('customevent', evt => {
    console.log(evt)
})
```

#### removeEventListener(eventName, handler, useCapture)

用于外部取消监听组件触发的事件。

```js
const handler = evt => {
    console.log(evt)
    comp.removeEventListener('customevent', handler)
}
comp.addEventListener('customevent', handler)
```

#### triggerLifeTime(lifeTime, args)

触发组件实例的生命周期钩子。

```js
comp.triggerLifeTime('moved', {test: 'xxx'})
```

#### triggerPageLifeTime(lifeTime, args)

触发组件实例中配置的页面的生命周期钩子。

```js
comp.triggerPageLifeTime('show', {test: 'xxx'})
```

#### toJSON()

将节点组件下的节点树生成一个 JSON 树

```js
comp.toJSON()
```


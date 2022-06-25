# mockComponents()

- **参数：**

    - `compDefinitions Array<String|Object>`

- **返回值：** `无`

- **用法：**

对组件usingComponents引入的组件进行mock，一个组件引入的子组件过多，在渲染创建组件时如果不进行mock则会导致单测运行较慢，同时
也有可能会存在子组件对当前组件执行结果有影响的场景导致用例执行失败，所以 这里我们建议对组件引入的子组件进行全量mock，使用该方法可以一次性对多个组件进行mock


**简单模式:**

当数组参数为string时，方法内部会创建view标签作为组件默认元素

```js
// 数组内为当前组件的子组件名称，要与usingComponents中写的名称一致
testUtils.mockComponents(['some-child-comp'])
```

**复杂模式：**

当数组中元素为Object时，需要传入name和definition字段，name 即为组件名，definition即为组件自定义

```js
testUtils.mockComponents([{
  name: 'some-child-comp',
  definition: {
    id: 'view',
    tagName: 'wx-view',
    template: '<div><slot/></div>'
  }
}])
```
**注意：**

子组件mock的执行一定要放在当前组件创建渲染之前

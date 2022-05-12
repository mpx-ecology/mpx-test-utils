# mpx-test-utils
Mpx框架单元测试工具函数库，项目集成封装了写单测过程中常用到的方法，来方便开发者更便捷的写单测

## 相关文档
该方法库的封装逻辑是在miniprogram-simulate所提供的方法之上

### jest
首先我们看下 jest 对象相关api的文档，当我们想要控制jest的某些流程和特性的时候，例如使用 jest.spyOn，jest.useFakeTimers，jest.mock 等进行模块，函数或者是setTimeout的模拟时，都需要调用jest对象的方法，那这里对应的文档为:
https://jestjs.io/zh-Hans/docs/27.4/jest-object

### miniprogram-simulate

因为我们是小程序组件单元测试，所以当我们需要对 miniprogram-simulate 创建生成的小程序组件实例进行属性读取或者是方法操作时，可以查看小程序组件相关api文档：
https://github.com/wechat-miniprogram/miniprogram-simulate/blob/master/docs/api.md


## 使用
```js
import * as testUtils from '@mpxjs/test-utils'
// OR
const testUtils = require('@mpxjs/test-utils')

testUtils.xxx()
```

## 方法列表

### createCompAndAttach
创建渲染并挂载自定义组件，使用simulate工具进行组件实例创建，并挂载

- **参数**：
  * compPath 组件代码路径
  * renderProps 组件props对象
```js
// 路径中的src在 jest.config.json 中配置了moduleNameMapper
const comp = testUtils.createCompAndAttach('src/component/example.mpx')
```

### createCompAndAttach
创建自定义组件实例，使用simulate工具进行组件实例创建，但不挂载，因为挂载组件会自动执行组件的
attached、ready等生命周期，假如你想在初始化生命周期执行前，做一些接口的mock，方法的mock等工作，
可以使用该方法进行组件的创建

- **参数**：
  * compPath 组件代码路径
  * renderProps 组件props对象
```js
// 路径中的src在 jest.config.json 中配置了moduleNameMapper
const comp = testUtils.createComp('src/component/example.mpx')

// 对组件实例上的某个初始化声明周期会执行到的方法进行mock
const someFunc2Spy = jest.spyOn(comp.instance, 'someFunc')

// 对组件进行挂载，挂载后会执行attache ready 等生命周期
comp.attach(document.body)

```

### mockComponents
对组件usingComponents引入的组件进行mock，有时间一个组件引入的子组件过多，在渲染创建组件时如果不进行mock则会导致单测运行较慢，所以
这里我们建议对组件引入的子组件进行全量mock，使用该方法可以一次性对多个组件进行mock

- **参数**：
  * compDefinitions Array<String|Object>
```js
// 当数组参数为string时，方法内部会创建view标签作为组件默认元素
testUtils.mockComponents(['some-child-comp'])

// OR
// 当数组中元素为Object时，需要传入name和definition字段，name 即为组件名，definition即为组件自定义
testUtils.mockComponents([{
    name: 'some-child-comp',
    definition: {
      id: 'view',
      tagName: 'wx-view',
      template: '<div><slot/></div>'
    }
}])


// 对组件实例上的某个初始化声明周期会执行到的方法进行mock
const someFunc2Spy = jest.spyOn(comp.instance, 'someFunc')

// 对组件进行挂载，挂载后会执行attache ready 等生命周期
comp.attach(document.body)

```

### checkExpectedData
校验两个对象是否完全一致，常用语对组件多个data做断言时，可直接使用对象的形式来进行断言

- **参数**：
  * originData 源数据对象
  * expectedData 预期数据对象
```js
testUtils.checkExpectedData({a:1}, {b:2})
// 当预期对象和源数据对象中有字段不一致或某个字段的值不一致的情况时，单测就会报错
```


### proxyFetch
请求数据mock，业务开发中避免不了的都要进行接口API请求来获取页面数据，单测场景下我们不用往服务器发送真实请求，
那样不仅慢而且会造成脏数据，所以这里我们提供了proxyFetch方法进行请求代理， 使用该方法一定要保证请求发出是使用的
mpx-fetch，否则该方法不生效

- **参数**：
  * url<String> API路径
  * mockData<String|Object> 当为string时表示mock数据文件地址，object即为data对象
  * replace<Boolean> 默认false方法默认会封装拼接errno 参数，如果不需要请将replace设为true

```js

    // 当mpx-fetch中发起含有someRequestUrl字符串的请求是，就会返回对应的mockData
    testUtils.proxyFetch('someRequestUrl', {
      data: {
          a: 1
      },
      requestConfig: {
        requestId: 1
      },
      statusCode: 200
    }, true)
```



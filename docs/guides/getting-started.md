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

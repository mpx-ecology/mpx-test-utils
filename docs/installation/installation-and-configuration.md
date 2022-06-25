# 安装与配置

> 我们在 [GitHub](https://github.com/Blackgan3/mpx-unit-test-demo) 上放有一个关于这些设置的示例工程。

我们将在本章节中对单元测试所需安装的工具库以及相关场景的配置进行介绍

## 安装 miniprogram-simulate

miniprogram-simulate 将小程序自定义组件双线程分离运行的机制调整成单线程模拟运行，利用 dom 环境进行渲染，借此来完成整个自定义组件树的搭建，因此需要首先安装该工具集

在此工具集的基础之上，我们新增了对Mpx文件的支持以及组件mock等功能，封装产出了一个定制化的工具集 @mpxjs/miniprogram-simulate

```bash
$ npm install --save @mpxjs/miniprogram-simulate
```

## 安装 Jest

整个单元测试运行在 Jest 提供的运行环境中，所以我们首先要安装 Jest

我们假定你在一开始已经安装并配置好了 webpack 和 Babel——例如通过 `@mpxjs/cli` 创建了 `mpx-demo` 模板脚手架。

我们要做的第一件事就是安装 Jest 和 Mpx Test Utils：

```bash
$ npm install --save-dev jest @mpxjs/test-utils
```

然后我们需要在 `package.json` 中定义一个单元测试的脚本。

```json
// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

## 配置转换器

为了告诉 Jest 如何处理 `*.mpx` 文件，我们需要安装和配置 `mpx-jest` 预处理器：

```bash
npm install --save-dev @mpxjs/mpx-jest
```

Jest的配置可以在 package.json 文件中定义或通过 jest.config.js, 与jest.config.ts 文件或通过 --config <path/to/file.js|ts|cjs|mjs|json> 选项。

这里我们统一使用 jest.config.js 配置文件来进行Jest相关配置

接下来在在项目根目录新建 `jest.config.js` 配置文件

```js
module.exports = {
    // ...
    "moduleFileExtensions": [
        "js",
        "json",
        // 告诉 Jest 处理 `*.mpx` 文件
        "mpx"
    ],
    "testEnvironment": "jsdom",
    // 测试环境使用 jsdom
    "transform": {
        // 用 `mpx-jest` 处理 `*.mpx` 文件
        "^.+\\.mpx$": "<rootDir>/node_modules/@mpxjs/mpx-jest"
    }
}
```

> **注意：**`mpx-jest` 目前并不支持 `@mpxjs/webpack-plugin/loader` 所有的功能，比如样式加载。额外的，诸如代码分隔等 webpack 特有的功能也是不支持的。如果要使用这些不支持的特性。

## 处理 webpack 别名

如果你在 webpack 中配置了别名解析，比如把 `@` 设置为 `/src` 的别名，那么你也需要用 `moduleNameMapper` 选项为 Jest 增加一个匹配配置：

```js
module.exports = {
    // ...
    "moduleNameMapper": {
        "@": "/src"
    }
}
```

## 为 Jest 配置 Babel

尽管最新版本的 Node 已经支持绝大多数的 ES2015 特性，你可能仍然想要在你的测试中使用 ES modules 语法和 stage-x 的特性。为此我们需要安装 `babel-jest`：

```bash
npm install --save-dev babel-jest
```

接下来，我们需要在 `jest.config.js` 的 `transform` 里添加一个入口，来告诉 Jest 用 `babel-jest` 处理 JavaScript 测试文件：

```js
module.exports = {
    // ...
    // ...
    "transform": {
        // ...
        // 用 `babel-jest` 处理 js
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    }
    // ...
}
```

> 默认情况下，`babel-jest` 会在其安装完毕后自动进行配置。尽管如此，因为我们已经显性的添加了对 `*.mpx` 文件的转换，所以现在我们也需要显性的配置 `babel-jest`。

我们假设 webpack 使用了 `babel-preset-env`，这时默认的 Babel 配置会关闭 ES modules 的转译，因为 webpack 已经可以处理 ES modules
了。然而，我们还是需要为我们的测试而开启它，因为 Jest 的测试用例会直接运行在 Node 上。

同样的，我们可以告诉 `babel-preset-env` 面向我们使用的 Node 版本。这样做会跳过转译不必要的特性使得测试启动更快。

为了仅在测试时应用这些选项，可以把它们放到一个独立的 `env.test` 配置项中 (这会被 `babel-jest` 自动获取)。

`.babelrc` 文件示例：

```json
{
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ]
  ],
  "env": {
    "test": {
      "presets": [
        [
          "env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ]
    }
  }
}
```

当然对于 babel 配置文件中的 env.test 部分，你也可以进行其他 plugin 的自定义配置，这是完全由你可控的

## 放置测试文件

默认情况下，Jest 将会递归的找到整个工程里所有 `.spec.js` 或 `.test.js` 扩展名的文件。如果这不符合你的需求，你也可以在 `jest.config.js`
里配置来进行改变[改变它的 `testRegex`](https://jestjs.io/docs-Hans/configuration#testregex-string-array-string)。

Jest 推荐你在被测试代码的所在目录下创建一个 `__tests__` 目录，但你也可以为你的测试文件随意设计自己习惯的文件结构。不过要当心 Jest 会为快照测试在临近测试文件的地方创建一个 `__snapshots__` 目录。

## 测试覆盖率

Jest 可以被用来生成多种格式的测试覆盖率报告。以下是一个简单的起步的例子：

扩展你的 `jest` 配置 (通常在 `package.json` 或 `jest.config.js` 中)
的 [`collectCoverage`](https://jestjs.io/docs-Hans/configuration#collectcoverage-boolean)
选项，然后添加 [`collectCoverageFrom`](https://jestjs.io/docs-Hans/configuration#collectcoveragefrom-array)数组来定义需要收集测试覆盖率信息的文件。

```js

module.exports = {
    // ...
    "collectCoverage": true,
    "collectCoverageFrom": [
        "**/*.{js,mpx}",
        "!**/node_modules/**"
    ]
}

```

这样就会开启[默认格式的测试覆盖率报告](https://jestjs.io/docs-Hans/configuration#coveragereporters-array-string)。你可以通过 `coverageReporters`
选项来定制它们。

```js

module.exports = {
    // ...
    "coverageReporters": [
        "html",
        "text-summary"
    ]
}

```

更多文档内容请移步至 [Jest 配置文档](https://jestjs.io/docs-Hans/configuration#collectcoverage-boolean)，在那里你可以找到覆盖率阀值、目标输出目录等选项。

## 定制 resolver
Mpx 框架本身支持文件纬度的跨平台构建以及页面组件路径索引功能，这部分能力是在webpack构建时通过 enhanced-resolve 插件来实现，当我们单测运行的组件中存在以下代码时

```js
// 构建时动态获取页面路径
import somePage from '../sub1/pages/index.mpx?resolve'

// 或者存在跨平台文件后缀声明时
/**
 * /componentList
 *   index.wx.mpx
 *   index.ali.mpx
 */
import componentList from '../componentList/index.mpx'

// 或者是异步分包场景我们对组件的引用
{
    componentA: '../someComp/list.mpx?root=sub1'
}
```
以上两种场景的代码在单测运行时都会导致报错，报错的原因时 Jest 运行时找不到对应的文件

这种情况我们就需要使用 Jest 提供的 [resolver](https://jestjs.io/zh-Hans/docs/configuration#resolver-string) 能力来解决

配置了 resolver 之后, Jest 运行时对文件的加载会先经过 resolver 处理

```js
module.exports = {
    //...
    resolver: './mpx-custom-resolver.js'
}
```

然后对应的 mpx-custom-resolver.js 的内容
```js
const path = require('path')

module.exports = (reqPath, options) => {
  // 处理路径构建时索引问题
  if (reqPath.includes('?resolve')) {
    return path.resolve('./test/customResolverDefault.js')
  }
  let realPath = reqPath
  // 处理组件异步分包引用方式
  if (reqPath.includes('?root')) {
    realPath = reqPath.split('?root')[0]
  }
  return options.defaultResolver(realPath, {
    ...options
  })
}
```

至此，在完成了上述一整套的依赖安装和相关配置之后，这时候你就可以开始着手进行组件单元测试的书写了，我们将在下一章中进行单元测试书写时的设计以及相关问题解决讲解

## 相关资料
- [Jest](https://jestjs.io/)
- [Babel preset env](https://github.com/babel/babel-preset-env)

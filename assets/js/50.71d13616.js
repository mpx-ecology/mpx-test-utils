(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{473:function(t,s,a){"use strict";a.r(s);var e=a(65),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),a("h1",{attrs:{id:"基础工具简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础工具简介"}},[t._v("#")]),t._v(" 基础工具简介")]),t._v(" "),a("h2",{attrs:{id:"小程序自定义组件测试工具集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序自定义组件测试工具集"}},[t._v("#")]),t._v(" 小程序自定义组件测试工具集")]),t._v(" "),a("p",[t._v("目前因为小程序独特的运行环境，所以对于小程序自定义组件的单元测试一直没有比较优雅的解决方案，我们需要一个工具将原本小程序自定义组件双线程分离运行的机制调整成单线程模拟运行，利用 dom 环境进行渲染，借此来完成整个自定义组件树的搭建，这里微信官方提供了miniprogram-simulate工具。")]),t._v(" "),a("h2",{attrs:{id:"选择一个测试运行器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择一个测试运行器"}},[t._v("#")]),t._v(" 选择一个测试运行器")]),t._v(" "),a("p",[t._v("测试运行器 (test runner) 就是运行测试的程序。")]),t._v(" "),a("p",[t._v("主流的 JavaScript 测试运行器有很多，在众多前端单元测试框架中，Jest 目前凭借零配置，高性能，且对于断言，快照，覆盖率等都有很好的集成，是目前较为流行的一个单测框架，当前推荐选择 Jest 做为单测框架")]),t._v(" "),a("p",[t._v("Jest 是一个由 Facebook 开发的测试运行器，致力于提供一个“bettery-included”单元测试解决方案。你可以在其"),a("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("学习到更多 Jest 的知识。")]),t._v(" "),a("h2",{attrs:{id:"浏览器环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器环境"}},[t._v("#")]),t._v(" 浏览器环境")]),t._v(" "),a("p",[t._v("小程序组件在单测场景下渲染依赖浏览器环境。技术上讲你可以将其运行在一个真实的浏览器，但是我们并不推荐，因为在不同的平台上都启动真实的浏览器是很复杂的。我们推荐取而代之的是用 "),a("a",{attrs:{href:"https://github.com/tmpvar/jsdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDOM"),a("OutboundLink")],1),t._v(" 在 Node 虚拟浏览器环境运行测试。")]),t._v(" "),a("p",[t._v("Jest 测试运行器自动设置了 JSDOM。对于其它测试运行器来说，你可以在你的测试入口处使用 "),a("a",{attrs:{href:"https://github.com/rstacruz/jsdom-global",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsdom-global"),a("OutboundLink")],1),t._v(" 手动设置 JSDOM。")]),t._v(" "),a("h2",{attrs:{id:"测试单文件组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试单文件组件"}},[t._v("#")]),t._v(" 测试单文件组件")]),t._v(" "),a("p",[t._v("Mpx 的单文件组件在它们运行于浏览器之前是需要预编译的。我们目前通过一个 Jest 预编译器来完成此步骤。")]),t._v(" "),a("p",[a("code",[t._v("mpx-jest")]),t._v(" 预处理器支持基本的单文件组件功能，但是目前还不能处理样式块。")]),t._v(" "),a("p",[t._v("对于不同的设置方式请移步下面的教程：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/installation/installation-and-configuration.html"}},[t._v("安装与配置")])],1)]),t._v(" "),a("h1",{attrs:{id:"安装与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装与配置"}},[t._v("#")]),t._v(" 安装与配置")]),t._v(" "),a("blockquote",[a("p",[t._v("我们在 "),a("a",{attrs:{href:"https://github.com/Blackgan3/mpx-unit-test-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v(" 上放有一个关于这些设置的示例工程。")])]),t._v(" "),a("p",[t._v("我们将在本章节中对单元测试所需安装的工具库以及相关场景的配置进行介绍")]),t._v(" "),a("h2",{attrs:{id:"安装-miniprogram-simulate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-miniprogram-simulate"}},[t._v("#")]),t._v(" 安装 miniprogram-simulate")]),t._v(" "),a("p",[t._v("miniprogram-simulate 将小程序自定义组件双线程分离运行的机制调整成单线程模拟运行，利用 dom 环境进行渲染，借此来完成整个自定义组件树的搭建，因此需要首先安装该工具集")]),t._v(" "),a("p",[t._v("在此工具集的基础之上，我们新增了对Mpx文件的支持以及组件mock等功能，封装产出了一个定制化的工具集 @mpxjs/miniprogram-simulate")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save @mpxjs/miniprogram-simulate\n")])])]),a("h2",{attrs:{id:"安装-jest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-jest"}},[t._v("#")]),t._v(" 安装 Jest")]),t._v(" "),a("p",[t._v("整个单元测试运行在 Jest 提供的运行环境中，所以我们首先要安装 Jest")]),t._v(" "),a("p",[t._v("我们假定你在一开始已经安装并配置好了 webpack 和 Babel——例如通过 "),a("code",[t._v("@mpxjs/cli")]),t._v(" 创建了 "),a("code",[t._v("mpx-demo")]),t._v(" 模板脚手架。")]),t._v(" "),a("p",[t._v("我们要做的第一件事就是安装 Jest 和 Mpx Test Utils：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev jest @mpxjs/test-utils\n")])])]),a("p",[t._v("然后我们需要在 "),a("code",[t._v("package.json")]),t._v(" 中定义一个单元测试的脚本。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jest"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置转换器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置转换器"}},[t._v("#")]),t._v(" 配置转换器")]),t._v(" "),a("p",[t._v("为了告诉 Jest 如何处理 "),a("code",[t._v("*.mpx")]),t._v(" 文件，我们需要安装和配置 "),a("code",[t._v("mpx-jest")]),t._v(" 预处理器：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev @mpxjs/mpx-jest\n")])])]),a("p",[t._v("Jest的配置可以在 package.json 文件中定义或通过 jest.config.js, 与jest.config.ts 文件或通过 --config <path/to/file.js|ts|cjs|mjs|json> 选项。")]),t._v(" "),a("p",[t._v("这里我们统一使用 jest.config.js 配置文件来进行Jest相关配置")]),t._v(" "),a("p",[t._v("接下来在在项目根目录新建 "),a("code",[t._v("jest.config.js")]),t._v(" 配置文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"moduleFileExtensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 告诉 Jest 处理 `*.mpx` 文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mpx"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"testEnvironment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsdom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试环境使用 jsdom")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"transform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用 `mpx-jest` 处理 `*.mpx` 文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"^.+\\\\.mpx$"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rootDir>/node_modules/@mpxjs/mpx-jest"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("注意：")]),a("code",[t._v("mpx-jest")]),t._v(" 目前并不支持 "),a("code",[t._v("@mpxjs/webpack-plugin/loader")]),t._v(" 所有的功能，比如样式加载。额外的，诸如代码分隔等 webpack 特有的功能也是不支持的。如果要使用这些不支持的特性。")])]),t._v(" "),a("h2",{attrs:{id:"处理-webpack-别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理-webpack-别名"}},[t._v("#")]),t._v(" 处理 webpack 别名")]),t._v(" "),a("p",[t._v("如果你在 webpack 中配置了别名解析，比如把 "),a("code",[t._v("@")]),t._v(" 设置为 "),a("code",[t._v("/src")]),t._v(" 的别名，那么你也需要用 "),a("code",[t._v("moduleNameMapper")]),t._v(" 选项为 Jest 增加一个匹配配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"moduleNameMapper"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/src"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"为-jest-配置-babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为-jest-配置-babel"}},[t._v("#")]),t._v(" 为 Jest 配置 Babel")]),t._v(" "),a("p",[t._v("尽管最新版本的 Node 已经支持绝大多数的 ES2015 特性，你可能仍然想要在你的测试中使用 ES modules 语法和 stage-x 的特性。为此我们需要安装 "),a("code",[t._v("babel-jest")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev babel-jest\n")])])]),a("p",[t._v("接下来，我们需要在 "),a("code",[t._v("jest.config.js")]),t._v(" 的 "),a("code",[t._v("transform")]),t._v(" 里添加一个入口，来告诉 Jest 用 "),a("code",[t._v("babel-jest")]),t._v(" 处理 JavaScript 测试文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"transform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用 `babel-jest` 处理 js")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"^.+\\\\.js$"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rootDir>/node_modules/babel-jest"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("默认情况下，"),a("code",[t._v("babel-jest")]),t._v(" 会在其安装完毕后自动进行配置。尽管如此，因为我们已经显性的添加了对 "),a("code",[t._v("*.mpx")]),t._v(" 文件的转换，所以现在我们也需要显性的配置 "),a("code",[t._v("babel-jest")]),t._v("。")])]),t._v(" "),a("p",[t._v("我们假设 webpack 使用了 "),a("code",[t._v("babel-preset-env")]),t._v("，这时默认的 Babel 配置会关闭 ES modules 的转译，因为 webpack 已经可以处理 ES modules\n了。然而，我们还是需要为我们的测试而开启它，因为 Jest 的测试用例会直接运行在 Node 上。")]),t._v(" "),a("p",[t._v("同样的，我们可以告诉 "),a("code",[t._v("babel-preset-env")]),t._v(" 面向我们使用的 Node 版本。这样做会跳过转译不必要的特性使得测试启动更快。")]),t._v(" "),a("p",[t._v("为了仅在测试时应用这些选项，可以把它们放到一个独立的 "),a("code",[t._v("env.test")]),t._v(" 配置项中 (这会被 "),a("code",[t._v("babel-jest")]),t._v(" 自动获取)。")]),t._v(" "),a("p",[a("code",[t._v(".babelrc")]),t._v(" 文件示例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"targets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"current"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当然对于 babel 配置文件中的 env.test 部分，你也可以进行其他 plugin 的自定义配置，这是完全由你可控的")]),t._v(" "),a("h2",{attrs:{id:"放置测试文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#放置测试文件"}},[t._v("#")]),t._v(" 放置测试文件")]),t._v(" "),a("p",[t._v("默认情况下，Jest 将会递归的找到整个工程里所有 "),a("code",[t._v(".spec.js")]),t._v(" 或 "),a("code",[t._v(".test.js")]),t._v(" 扩展名的文件。如果这不符合你的需求，你也可以在 "),a("code",[t._v("jest.config.js")]),t._v("\n里配置来进行改变"),a("a",{attrs:{href:"https://jestjs.io/docs-Hans/configuration#testregex-string-array-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("改变它的 "),a("code",[t._v("testRegex")]),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("Jest 推荐你在被测试代码的所在目录下创建一个 "),a("code",[t._v("__tests__")]),t._v(" 目录，但你也可以为你的测试文件随意设计自己习惯的文件结构。不过要当心 Jest 会为快照测试在临近测试文件的地方创建一个 "),a("code",[t._v("__snapshots__")]),t._v(" 目录。")]),t._v(" "),a("h2",{attrs:{id:"测试覆盖率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试覆盖率"}},[t._v("#")]),t._v(" 测试覆盖率")]),t._v(" "),a("p",[t._v("Jest 可以被用来生成多种格式的测试覆盖率报告。以下是一个简单的起步的例子：")]),t._v(" "),a("p",[t._v("扩展你的 "),a("code",[t._v("jest")]),t._v(" 配置 (通常在 "),a("code",[t._v("package.json")]),t._v(" 或 "),a("code",[t._v("jest.config.js")]),t._v(" 中)\n的 "),a("a",{attrs:{href:"https://jestjs.io/docs-Hans/configuration#collectcoverage-boolean",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("collectCoverage")]),a("OutboundLink")],1),t._v("\n选项，然后添加 "),a("a",{attrs:{href:"https://jestjs.io/docs-Hans/configuration#collectcoveragefrom-array",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("collectCoverageFrom")]),a("OutboundLink")],1),t._v("数组来定义需要收集测试覆盖率信息的文件。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"collectCoverage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"collectCoverageFrom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.{js,mpx}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!**/node_modules/**"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("这样就会开启"),a("a",{attrs:{href:"https://jestjs.io/docs-Hans/configuration#coveragereporters-array-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认格式的测试覆盖率报告"),a("OutboundLink")],1),t._v("。你可以通过 "),a("code",[t._v("coverageReporters")]),t._v("\n选项来定制它们。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"coverageReporters"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text-summary"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("更多文档内容请移步至 "),a("a",{attrs:{href:"https://jestjs.io/docs-Hans/configuration#collectcoverage-boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest 配置文档"),a("OutboundLink")],1),t._v("，在那里你可以找到覆盖率阀值、目标输出目录等选项。")]),t._v(" "),a("h2",{attrs:{id:"定制-resolver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定制-resolver"}},[t._v("#")]),t._v(" 定制 resolver")]),t._v(" "),a("p",[t._v("Mpx 框架本身支持文件纬度的跨平台构建以及页面组件路径索引功能，这部分能力是在webpack构建时通过 enhanced-resolve 插件来实现，当我们单测运行的组件中存在以下代码时")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建时动态获取页面路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" somePage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../sub1/pages/index.mpx?resolve'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者存在跨平台文件后缀声明时")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * /componentList\n *   index.wx.mpx\n *   index.ali.mpx\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" componentList "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../componentList/index.mpx'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者是异步分包场景我们对组件的引用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("componentA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../someComp/list.mpx?root=sub1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("以上两种场景的代码在单测运行时都会导致报错，报错的原因时 Jest 运行时找不到对应的文件")]),t._v(" "),a("p",[t._v("这种情况我们就需要使用 Jest 提供的 "),a("a",{attrs:{href:"https://jestjs.io/zh-Hans/docs/configuration#resolver-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("resolver"),a("OutboundLink")],1),t._v(" 能力来解决")]),t._v(" "),a("p",[t._v("配置了 resolver 之后, Jest 运行时对文件的加载会先经过 resolver 处理")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolver")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mpx-custom-resolver.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后对应的 mpx-custom-resolver.js 的内容")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reqPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理路径构建时索引问题")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reqPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?resolve'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test/customResolverDefault.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" realPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reqPath\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理组件异步分包引用方式")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reqPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    realPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reqPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("realPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("options\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("至此，在完成了上述一整套的依赖安装和相关配置之后，这时候你就可以开始着手进行组件单元测试的书写了，我们将在下一章中进行单元测试书写时的设计以及相关问题解决讲解")]),t._v(" "),a("h2",{attrs:{id:"相关资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关资料"}},[t._v("#")]),t._v(" 相关资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/babel/babel-preset-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel preset env"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);
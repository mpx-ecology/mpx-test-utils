# createComp()

- **参数：**

    - `{compPath} string`
    - `{renderProps} props`

- **返回值：** `{RootComponent}`

- **用法：**

创建渲染一个 Mpx 组件的 [`RootComponent`](RootComponent/)。

**创建实例，但不进行组件的挂载**，即组件的初始化生命周期等咱未触发，多用于在组件实例创建后，对组件实例的方法进行mock等各种操作后，
再去进行组件挂载。

**Without options:**

```js
import { createComp } from '@mpxjs/test-utils'
let compPath = './component/list.mpx'

describe('List', () => {
  it('renders a view', () => {
    const comp = createComp(compPatn)
    const someFunc2Spy = jest.spyOn(comp.instance, 'someFunc')
    // ... 中间部分操作触发了组件中的 someFunc
    expect(someFunc2Spy.mock.calls.length).toBe(1)
  })
})
```

**使用 props 选项：**

```js
import { createComp } from '@mpxjs/test-utils'
let compPath = './component/list.mpx'

describe('List', () => {
  it('renders a view', () => {
    const comp = createCompAndAttach(compPatn, {
      propsA: 'testA'
    })
    const someFunc2Spy = jest.spyOn(comp.instance, 'someFunc')
    // ... 中间部分操作触发了组件中的 someFunc
    expect(someFunc2Spy.mock.calls.length).toBe(1)
  })
})
```

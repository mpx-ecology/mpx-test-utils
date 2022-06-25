# createCompAndAttach()

- **参数：**

    - `{compPath} string`
    - `{renderProps} props`

- **返回值：** `{RootComponent}`

- **用法：**

创建一个包含被挂载和渲染的 Mpx 组件的 [`RootComponent`](RootComponent/)。

**Without options:**

```js
import { createCompAndAttach } from '@mpxjs/test-utils'
let compPath = './component/list.mpx'

describe('List', () => {
  it('renders a view', () => {
    const comp = createCompAndAttach(compPatn)
    expect(comp.contains('view')).toBe(true)
  })
})
```

**使用 props 选项：**

```js

import { createCompAndAttach } from '@mpxjs/test-utils'
let compPath = './component/list.mpx'

describe('List', () => {
  it('renders a view', () => {
    const comp = createCompAndAttach(compPatn, {
        propsA: 'testA'
    })
    expect(comp.instance.propsA).toBe('testA')
  })
})
```

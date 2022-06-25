## setValue

该方法是接下来这段代码的别名：

```js
wrapperArray.wrappers.forEach(wrapper => wrapper.setValue(value))
```

- **参数：**

  - `{any} value`

- **示例：**

```js
import { mount } from '@vue/test-utils'

const wrapper = mount({
  data() {
    return {
      t1: '',
      t2: ''
    }
  },
  template: `
    <div>
      <input type="text" name="t1" class="foo" v-model="t1" />
      <input type="text" name="t2" class="foo" v-model="t2"/>
    </div>`
})

test('setValue demo', async () => {
  const wrapperArray = wrapper.findAll('.foo')
  expect(wrapper.vm.t1).toEqual('')
  expect(wrapper.vm.t2).toEqual('')
  await wrapperArray.setValue('foo')
  expect(wrapper.vm.t1).toEqual('foo')
  expect(wrapper.vm.t2).toEqual('foo')
})
```

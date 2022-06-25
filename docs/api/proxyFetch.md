# proxyFetch()

- **参数：**

    - url: `String`
    - mockData: `<String|Object>`
    - replace: `Boolean`

- **返回值：** `无`

- **用法：**

请求数据mock，业务开发中避免不了的都要进行接口API请求来获取页面数据，单测场景下我们不用往服务器发送真实请求， 那样不仅慢而且会造成脏数据，所以这里我们提供了proxyFetch方法进行请求代理， 使用该方法一定要保证请求发出是使用的 mpx-fetch，否则该方法不生效

**without replace:**

replace 默认false方法默认会封装拼接errno 参数，如果不需要请将replace设为true

```js
testUtils.proxyFetch('someRequestUrl', {
  data: {
    a: 1
  },
  statusCode: 200
})

```

**使用replace：**

replace 为true，将严格使用你传递进来的mockData

```js
testUtils.proxyFetch('someRequestUrl', {
  data: {
    a: 1
  },
  statusCode: 200
})
```
**注意：**

使用该方法一定要保证请求发出是使用的 mpx-fetch，否则该方法不生效

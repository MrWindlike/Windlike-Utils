# Net
```js
interface NetModule {
  parseParams: (locationSearch: string) => object;
  parseUrl: (url: string) => UrlInfoObject;
}

interface UrlInfoObject {
  url: string
  host: string
  port: number
  path: string
  params: object
}
```

## parseParams
### Describe
解析地址参数字符串为对象的函数。
```js
(locationSearch: string) => object;
```

### Arguments
  - locationSearch(string): 参数字符串，如'?key=value&search=windlike'。

### Returns
(object): 参数对象。

### Example
```js
const SEARCH = '?key=value&search=windlike';

utils.net.parseParams(SEARCH);  // { key: 'value', search: 'windlike' }
```

## parseParams
### Describe
解析地址的函数。
```js
interface UrlInfoObject {
  url: string
  host: string
  port: number
  path: string
  params: object
}

(url: string) => UrlInfoObject;
```

### Arguments
  - url(string): 地址。

### Returns
(UrlInfoObject): 含有地址信息的对象。

### Example
```js
const URL = 'https://github.com/MrWindlike/Windlike-Utils?key=value';

utils.net.parseUrl(URL);
// {
//   url: URL,
//   host: 'https://github.com',
//   port: 80,
//   path: '/MrWindlike/Windlike-Utils',
//   params: {
//     key: 'value',
//   },
// }
```
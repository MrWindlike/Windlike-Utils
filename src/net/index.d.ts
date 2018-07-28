/**
 * @obj
 * @desc  desc
 * @method  parseParams -  解析URL的参数部分的函数
 * @method  parseUrl -  解析URL的函数
 */
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

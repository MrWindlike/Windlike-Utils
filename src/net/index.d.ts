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

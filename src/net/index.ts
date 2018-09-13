/// <reference path="index.d.ts"/>

import string from '../string/index';
import array from '../array/index';
import fn from '../fn/index';

/**
 * @obj
 * @desc  desc
 * @method  parseParams -  解析URL的参数部分的函数
 * @method  parseUrl -  解析URL的函数
 */
const net: NetModule = {
  parseParams: function (locationSearch: string): object {
    let first = (arr: any[]) => arr[0];
    let last = (arr: any[]) => arr[arr.length - 1];
    let hasQuestionMark = (locationSearch: string) => locationSearch.includes('?') ? locationSearch : `?${locationSearch}`;
    let separateOutParams = fn.compose<string>(last, string.split('?'), hasQuestionMark);
    let groupingParams: (paramsStr: string) => string[][] = fn.compose<string[][]>(array.map(string.split('=')), string.split('&'));
    let getParams = (paramsArr: string[][]) => {
      let params: any = {};

      paramsArr.forEach((param: string[]) => {
        if (first(param)) {
          params[first(param)] = last(param);
        }
      });

      return params;
    };

    let paramsStr: string = separateOutParams(locationSearch);
    let paramsArr: string[][] = groupingParams(paramsStr);
    let params: object = getParams(paramsArr);

    return params;
  },
  parseUrl: function (url: string): UrlInfoObject {
    const HOST_PORT_REGEXP = /^(http:\/\/|https:\/\/)[0-9a-zA-Z.:]+/;
    const HOST_REGEXP = /^(http:\/\/|https:\/\/)[0-9a-zA-Z.]+/;

    /* function */
    let first = (arr: any[]) => arr[0];
    let last = (arr: any[]) => arr[arr.length - 1];
    let checkPort = (port: string) => port ? port : 80;
    let checkPath = (path: string) => path ? path : '/';
    let checkParams = (url: string) => url.includes('?') ? url : '';
    let separateOutHref: Fn<string> = fn.compose<string>(first, string.split('?'));
    let separateOutParams: Fn<string> = fn.compose<string>(last, string.split('?'), checkParams);
    let matchHost: Fn<string> = fn.compose<string>(first, string.match(HOST_PORT_REGEXP));
    let groupingParams: (paramsStr: string) => string[][] = fn.compose<string[][]>(array.map<string>(string.split('=')), string.split('&'));
    let getParams = (paramsArr: string[][]) => {
      let params: ArrayObject = {};

      paramsArr.forEach((param: string[]) => {
        if (first(param)) {
          params[first(param)] = last(param);
        }
      });

      return params;
    };
    let getHost: Fn<string> = fn.compose<string>(first, string.match(HOST_REGEXP));
    let getPort: (host: string) => Fn<number> = (host: string) => fn.compose<number>(checkPort, last, string.split(':'), last, string.split(host));

    /* var */
    let href: string = separateOutHref(url);
    let paramsStr: string = separateOutParams(url);
    let hostWithPort: string = matchHost(href);
    let host: string = getHost(hostWithPort);
    let port: number = getPort(host)(hostWithPort);
    let path: string = fn.compose<string>(checkPath, last, string.split(hostWithPort))(href);
    let paramsArr: string[][] = groupingParams(paramsStr);
    let params: object = getParams(paramsArr);
    const urlMsg: UrlInfoObject = { url, host, port, path, params };

    return urlMsg;
  }
};

export default net;
export const parseParams = net.parseParams;
export const parseUrl = net.parseUrl;

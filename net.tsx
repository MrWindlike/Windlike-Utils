/// <reference path="declare.d.ts"/>

import string from './string';
import array from './array';
import fn from './fn';

interface Instance {
	[propsName: string]: any
}

/**
 * @obj
 * @desc  desc
 * @method  parseUrl -  解析URL的函数
 * @method  jsonp -  使用JSONP发起跨域请求
 */
const net: net.Net = {
	parseUrl: function(url: string): object {
		const HOST_PORT_REGEXP = /^(http:\/\/|https:\/\/)[0-9a-zA-Z\.:]+/;
		const HOST_REGEXP = /^(http:\/\/|https:\/\/)[0-9a-zA-Z\.]+/;

		/* function */
		let first = (arr: any[])=> arr[0];
		let last = (arr: any[])=> arr[arr.length - 1];
		let isPortEmpty = (port: string)=> port ? port : '80';
		let isPathEmpty = (path: string)=> path ? path : '/';
		let isParamsEmpty = (url: string)=> url.includes('?') ? url : '';
		let separateOutHref = fn.compose(first, string.split('?'));
		let separateOutParams = fn.compose(last, string.split('?'), isParamsEmpty);
		let matchHost = fn.compose(first, string.match(HOST_PORT_REGEXP));
		let groupingParams = fn.compose(array.map(string.split('=')), string.split('&'));
		let getParams = (paramsArr: string[][])=> {
			let params: Instance = {};

			paramsArr.forEach((param: string[])=> { 
				if(first(param)){
					params[first(param)] = last(param);
				}
			});

			return params;
		};
		let getHost = fn.compose(first, string.match(HOST_REGEXP));
		let getPort = (host: string)=> fn.compose(isPortEmpty, last, string.split(':'), last, string.split(host));

		/* var */
		let href: string = separateOutHref(url);
		let paramsStr: string = separateOutParams(url);
		let hostWithPort: string = matchHost(href);
		let host: string = getHost(hostWithPort);
		let port: string = getPort(host)(hostWithPort);
		let path: string = fn.compose(isPathEmpty, last, string.split(hostWithPort))(href);
		let paramsArr: string[][] = groupingParams(paramsStr);
		let params: object = getParams(paramsArr);
		const urlMsg: object = { url, host, port, path, params };
		
		return urlMsg;
	},
	jsonp: function(url: string, name: string = 'jsonpCallback'): Promise<{}> {
		return new Promise((resolve, reject)=> {
			/* var */
			let jsonpCallback: string = `jsp_${(new Date).getTime()}`;
			let target = document.getElementsByTagName('script')[0] || document.head;
			let script = document.createElement('script');

			/* function */
			let hasParams = ()=> url.includes('?');
			let addJsonpCallback = ()=> hasParams() ? `${url}&${name}=${jsonpCallback}` : `${url}?${name}=${jsonpCallback}`;
			let createScript = ()=> {
				url = addJsonpCallback();
				script.src = url;
				script.onerror = (err: never)=> { cleanUp(); reject(err); }
				target.parentNode.insertBefore(script, target);
			};
			let cleanUp = ()=> {
				window[jsonpCallback] = undefined;
				target.parentNode.removeChild(script);
			};
			window[jsonpCallback] = (data: any)=> {
				cleanUp();
				resolve(data);
			};

			createScript();
		});
	}
};

export default net;

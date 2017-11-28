/* 本声明文件安字母顺序编写，方便查找 */

declare interface Date {
	[key: string]: any
}

declare interface Instance {
	[key: string]: any
}

declare interface Object {
	[key: string]: any
}

declare interface Window {
    [key: string]: any;
}


/* 模块接口 */

/**
 * @目录
 * @desc  工具实例。部分函数使用到ES6的语法，请确保你的浏览器支持。
 * @namespace  array -  数组
 * @namespace  date -  日期
 * @namespace  fn -  函数
 * @namespace  math -  数学
 * @namespace  net -  网络
 * @namespace  string -  字符串
 * @namespace  timing -  耗时计算
 * @namespace  verification -  验证
 */


/**
 * @obj
 * @desc 操作数组的相关方法。所有函数不会改变实参，会返回操作后的结果。
 * @method compareLength -  比较两个数组的长度
 * @method equal -  比较两个数组的值是否相等
 * @method deleteValue -  从数组里删除第一个相应值，返回新数组
 * @method deleteValueAll -  从数组里删除所有相应值，返回新数组
 * @method deleteSomeExcept -  从数组里删除所有不匹配元素，返回新数组
 * @method map -  封装原生map
 */
declare namespace array {
	export interface Array {
		compareLength: (firstArray: any[], secondArray: any[])=> number;
		equal: <T>(firstArray: T[], secondArray: T[])=> boolean;
		deleteValue: <T>(array: T[], value: T)=> T[];
		deleteValueAll: <T>(array: T[], value: T)=> T[];
		deleteSomeExcept: <T>(array: T[], exceptArray: T[])=> T[];
		map: <T>(fn: any)=> (array: T[])=> T[];
	}
}

/**
 * @obj
 * @desc 操作日期的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method formatDate - 传入日期格式，返回已毫秒数做参数的日期格式化函数。详情见本函数。
 */
declare namespace date {
	export interface Date {
	 	/**
	 	 * @func
	 	 * @desc 格式化日期的函数。
	 	 * @param {string} format - 需要的日期的格式。如:
	 	 				   'yy-MM-dd hh:mm:ss ww'(ww为星期,小写w为英文，大写W为中文)
	 	 				   'MM dd，yyyy hh:mm:ss'等等
		 * @return {function} 返回一个需要传入毫秒数作为参数的函数。
	 	 */
		formatDate: (format: string)=> (date: number)=> string;
	}
}

/**
 * @obj
 * @desc 操作函数的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  curry - 将传入的函数柯里化
 * @method  compose - 将所有传入的函数从右向左组合起来
 */
declare namespace fn {
	export interface Fn {
		curry: (fn: typeof Function)=> (...newParams: any[])=> any;
		compose: (...fn: any[])=> (...params: any[])=> any;
	}
}

/**
 * @obj
 * @desc  数学的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  random -  返回一个可以产生符合条件的随机数的函数
 */
declare namespace math {
	export interface Math {
		random: (min: number, max: number, float: boolean)=> ()=> number;
	}
}

/**
 * @obj
 * @desc  desc
 * @method  parseUrl -  解析URL的函数
 * @method  jsonp -  使用JSONP发起跨域请求
 */
declare namespace net {
	export interface Net {
		parseParams: (locationSearch: string)=> object;
		parseUrl: (url: string)=> object;
		jsonp: (url: string, name: string)=> Promise<{}>;
	}
}

/**
 * @obj
 * @desc 操作字符串的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method replace - 传入匹配规则参数，返回一个符合改匹配规则的函数
 * @method escapedUnicode - 将形如'&#dddd;'(d为0到9)的Unicode转义成正常字符
 * @method split - 返回分割该字符的函数
 * @method match - 返回匹配该正则的函数
 */
declare namespace string {
	export interface String {
		replace: (match: RegExp | string)=> (str: string, substitute: any)=> string;
		escapedUnicode: (str: string)=> string;
		split: (char: string | RegExp)=> (str: string)=> string[];
		match: (regexp: RegExp)=> (str: string)=> string[];
	}
}

/**
 * @obj
 * @desc 计算各种操作花费时间。
 * @method  calculateFuncTime -  计算函数耗时
 * @method  calculateFirstPaintTime -  计算白屏时间
 */
declare namespace timing {
	export interface Timing {
		_timing: object;

		calculateFuncTime: (fn: ()=> any, ...params: any[])=> number;
		calculateFirstPaintTime: ()=> number;
	}
}

/**
 * @obj
 * @desc 验证的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  checkRe -  返回验证是否匹配该正则的函数
 * @method  checkLength -  返回验证是否匹配长度的函数
 * @method  check -  返回验证是否匹配该类型的函数
 */
declare namespace verification {
	export interface Verification {
		_phoneRE: RegExp;
		_emailRE: RegExp;

		checkRe: (re: RegExp)=> (checkedStr: string)=> boolean;
		checkLength: (min: number, max: number)=> (str: string)=> boolean;
		check: (checkType: string)=> (checkedStr: string)=> boolean;
	}
}
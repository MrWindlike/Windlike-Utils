/// <reference path="declare.d.ts"/>

/**
 * @obj
 * @desc 操作字符串的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method replace - 传入匹配规则参数，返回一个符合改匹配规则的函数
 * @method escapedUnicode - 将形如'&#dddd;'(d为0到9)的Unicode转义成正常字符
 * @method split - 返回分割该字符的函数
 * @method match - 返回匹配该正则的函数
 */
 const string: string.String = {
 	replace: function(match: RegExp | string): (str: string, substitute: any)=> string {
 		return (str: string, substitute: any)=> str.replace(match, substitute);
 	},
 	escapedUnicode: function(str: string): string {
 		let replaceUnicodeWithChar = this.replace(new RegExp(/&#(\d+);/g));

 		return replaceUnicodeWithChar(str, (substring: string, unicode: number): string=> String.fromCharCode(unicode));
 	},
 	split: function(char: string | RegExp): (str: string)=> string[] {
 		return (str: string): string[]=> str.split(char);
 	},
 	match: function(regexp: RegExp): (str: string)=> string[]{
 		return (str: string): string[]=> str.match(regexp);
 	}
 };

 export default string;

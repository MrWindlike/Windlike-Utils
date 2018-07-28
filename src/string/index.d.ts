/**
 * @obj
 * @desc 操作字符串的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method replace - 传入匹配规则参数，返回一个符合改匹配规则的函数
 * @method split - 返回分割该字符的函数
 * @method match - 返回匹配该正则的函数
 */
interface StringModule {
  replace: (match: RegExp | string) => (str: string, substitute: any) => string;
  split: (char: string | RegExp) => (str: string) => string[];
  match: (regexp: RegExp) => (str: string) => string[];
}

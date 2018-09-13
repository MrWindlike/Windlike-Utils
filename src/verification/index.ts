/// <reference path="index.d.ts"/>

/**
 * @obj
 * @desc 验证的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  checkRe -  返回验证是否匹配该正则的函数
 * @method  checkLength -  返回验证是否匹配长度的函数
 * @method  check -  返回验证是否匹配该类型的函数
 */
let _this: VerificationModule = null;
export const verification: VerificationModule = _this = {
  _phoneRE: /^(13[0-9]|15[012356789]|18[0-9]|17[678]|14[57])[0-9]{8}$/,
  _emailRE: /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,

  checkRe: function (re: RegExp): (checkedStr: string) => boolean {
    return (checkedStr: string): boolean => {
      return re.test(checkedStr);
    };
  },
  checkLength: function (min: number = 0, max: number): (str: string) => boolean {
    return (str: string): boolean => str.length >= min && str.length <= max;
  },
  check: function (checkType: CheckType): (checkedStr: string) => boolean {
    return _this.checkRe(_this[`_${checkType}RE`]);
  }
};

export default verification;
export const checkRe = verification.checkRe;
export const checkLength = verification.checkLength;
export const check = verification.check;

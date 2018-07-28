/**
 * @obj
 * @desc 验证的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  checkRe -  返回验证是否匹配该正则的函数
 * @method  checkLength -  返回验证是否匹配长度的函数
 * @method  check -  返回验证是否匹配该类型的函数
 */
interface VerificationModule {
  readonly _phoneRE: RegExp;
  readonly _emailRE: RegExp;

  checkRe: (re: RegExp) => (checkedStr: string) => boolean;
  checkLength: (min: number, max: number) => (str: string) => boolean;
  check: (checkType: CheckType) => (checkedStr: string) => boolean;
  [prop: string]: any
}

type CheckType = 'phone' | 'email';

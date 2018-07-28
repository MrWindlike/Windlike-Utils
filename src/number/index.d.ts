/**
 * @obj
 * @desc  数字的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  random -  返回一个可以产生符合条件的随机数的函数
 */
interface NumberModule {
  random: (min: number, max: number, float: boolean) => () => number;
}

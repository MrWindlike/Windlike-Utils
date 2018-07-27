/// <reference path="index.d.ts"/>

/**
 * @obj
 * @desc  数字的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  random -  返回一个可以产生符合条件的随机数的函数
 */
const number: NumberModule = {
  random: function (min: number = 0, max: number, float: boolean): () => number {
    return (): number => {
      if (min > max) {
        [min, max] = [max, min];
      }
      if (float || min % 1 || max % 1) {
        return min + Math.random() * (max - min);
      }

      return min + Math.floor(Math.random() * (max - min + 1));
    };
  }
};

export default number;

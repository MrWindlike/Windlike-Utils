/// <reference path="index.d.ts"/>

import object from '../object/index';

let _this: ArrayModule = null;
const array: ArrayModule = _this = {
  /* 比较相关函数 */
  /**
   * @func
   * @desc 比较两个数组的长度
   * @return 0 - 相等
   * @return >0 - 第一个大于第二个的长度
   * @return <0 - 第一个小于第二个的长度
   */
  compareLength: function (firstArray: any[], secondArray: any[]): number {
    return firstArray.length - secondArray.length;
  },
  shallowCompare: function <T>(firstArray: T[], secondArray: T[]): boolean {
    return object.shallowCompare(firstArray, secondArray);
  },
  deepCompare: function <T>(firstArray: T[], secondArray: T[]): boolean {
    return object.deepCompare(firstArray, secondArray);
  },

  /* 删除相关函数 */
  deleteItem: function <T>(array: T[], value: T): T[] {
    let tempArray = [...array];
    let index = tempArray.indexOf(value);

    if (index !== -1) {
      tempArray.splice(index, 1);
    }

    return tempArray;
  },
  deleteItems: function <T>(array: T[], value: T): T[] {
    return array.filter((item) => item !== value);
  },
  deleteItemsExcept: function <T>(array: T[], exceptArray: T[]): T[] {
    return array.filter(value => exceptArray.includes(value));
  },
  /* 原生封装 */
  map: function (fn: any): <T>(array: T[]) => T[] {
    return <T>(array: T[]) => array.map(fn);
  }
};

export default array;

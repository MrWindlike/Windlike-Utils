/// <reference path="index.d.ts"/>

import {
  shallowCompare as objectShallowCompare,
  deepCompare as objectDeepCompare,
  get
} from '../object/index';

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
    return objectShallowCompare(firstArray, secondArray);
  },
  deepCompare: function <T>(firstArray: T[], secondArray: T[]): boolean {
    return objectDeepCompare(firstArray, secondArray);
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
  },

  /** 数组去重 */
  removeDuplicates: function <T>(array: T[], key: string = ''): T[] {
    const newArray: T[] = [];
    const exist: T[] = [];

    array.forEach((item) => {
      if (typeof item === 'object') {
        const value = get(item, key);

        if (!exist.includes(value)) {
          newArray.push(item);
          exist.push(value);
        }
      } else {
        if (!exist.includes(item)) {
          newArray.push(item);
          exist.push(item);
        }
      }


    });

    return newArray;
  },
};

export default array;
export const compareLength = array.compareLength;
export const shallowCompare = array.shallowCompare;
export const deepCompare = array.deepCompare;
export const deleteItem = array.deleteItem;
export const deleteItems = array.deleteItems;
export const deleteItemsExcept = array.deleteItemsExcept;
export const map = array.map;
export const removeDuplicates = array.removeDuplicates;

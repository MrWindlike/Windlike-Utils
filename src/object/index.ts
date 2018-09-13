/// <reference path="index.d.ts"/>
/**
 * @obj
 * @desc 操作对象的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method valueEqual - 判断两个对象的值是否相等
 */
let _this: ObjectModule = null;
const object: ObjectModule = (_this = {
  shallowCompare: function (firstObj: AnyObject, secondObj: AnyObject): boolean {
    for (let key in firstObj) {
      if (
        !firstObj.hasOwnProperty(key) ||
        !secondObj.hasOwnProperty(key) ||
        firstObj[key] !== secondObj[key]
      ) {
        return false;
      }
    }

    return true;
  },
  deepCompare: function (firstObj: AnyObject, secondObj: AnyObject): boolean {
    const firstEntries: any[] = Object.entries(firstObj);
    const secondEntries: any[] = Object.entries(secondObj);

    if (firstEntries.length !== secondEntries.length) {
      return false;
    }

    for (let [key] of firstEntries) {
      const firstValue = firstObj[key];
      const secondValue = secondObj[key];

      if (typeof firstValue !== typeof secondValue) {
        return false;
      } else if (typeof firstValue === 'object' && firstValue !== null) {
        if (!_this.deepCompare(firstValue, secondValue)) {
          return false;
        }
      } else {
        if (firstValue !== secondValue) {
          return false;
        }
      }
    }

    return true;
  },
  has: function (object: AnyObject, key: string): boolean {
    return object[key] !== undefined;
  }
});

export default object;
export const shallowCompare = object.shallowCompare;
export const deepCompare = object.deepCompare;
export const has = object.has;

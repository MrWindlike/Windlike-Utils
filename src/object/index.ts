/// <reference path="index.d.ts"/>
/**
 * @obj
 * @desc 操作对象的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method valueEqual - 判断两个对象的值是否相等
 */
let _this: ObjectModule = null;
const object: ObjectModule = _this = {
  valueEqual: function (firstObj: AnyObject, secondObj: AnyObject): boolean {
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
        if (!_this.valueEqual(firstValue, secondValue)) {
          return false;
        }
      } else {
        if (firstValue !== secondValue) {
          return false;
        }
      }
    }

    return true;
  }
};

export default object;

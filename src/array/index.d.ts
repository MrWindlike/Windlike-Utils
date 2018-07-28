/**
 * @obj
 * @desc 操作数组的相关方法。所有函数不会改变实参，会返回操作后的结果。
 * @method compareLength -  比较两个数组的长度
 * @method equal -  比较两个数组的值是否相等
 * @method deleteValue -  从数组里删除第一个相应值，返回新数组
 * @method deleteValueAll -  从数组里删除所有相应值，返回新数组
 * @method deleteSomeExcept -  从数组里删除所有不匹配元素，返回新数组
 * @method map -  封装原生map
 */
interface ArrayModule {
  compareLength: (firstArray: any[], secondArray: any[]) => number;
  equal: <T>(firstArray: T[], secondArray: T[]) => boolean;
  deleteItem: <T>(array: T[], value: T) => T[];
  deleteItems: <T>(array: T[], value: T) => T[];
  deleteItemsExcept: <T>(array: T[], exceptArray: T[]) => T[];
  map: <T>(fn: any) => (array: T[]) => T[];
}

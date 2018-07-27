/**
 * @obj
 * @desc 操作对象的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method valueEqual - 判断两个对象的值是否相等
 */
interface ObjectModule {
  valueEqual: (firstObj: AnyObject, secondObj: AnyObject) => boolean
}

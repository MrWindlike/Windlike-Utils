/**
 * @obj
 * @desc 操作函数的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  curry - 将传入的函数柯里化
 * @method  compose - 将所有传入的函数从右向左组合起来
 */
interface FunctionModule {
  curry: <Return>(fn: (...params: any[]) => Return) => CurryFunction<Return>;
  compose: <Return>(...fn: any[]) => (...params: any[]) => Return;
  /**
   *
   * @template Return
   * @param {(...params: any[]) => Return} fn  回调函数
   * @param {number} wait  等待时间
   * @param {boolean} immediate  是否立刻执行一次
   * @returns {(() => (Return | void))}
   */
  debounce: <Return>(
    fn: (...params: any[]) => Return,
    wait: number,
    immediate: boolean
  ) => Executor<Return>;
  throttle: <Return>(
    fn: (...params: any[]) => Return,
    wait: number,
    options?: ThrottleOptions
  ) => Executor<Return>;
}

interface CurryFunction<Return> {
  (...newParams: any[]): Return | CurryFunction<Return>
}

interface Executor<Return> {
  execute: (...params: any[]) => (Return | null);
  result: Return;
}

interface ThrottleOptions {
  isExecuteAtStart: boolean;  // 是否执行开始函数
  isExecuteAtEnd: boolean;// 是否执行结尾函数
}
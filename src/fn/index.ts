/// <reference path="index.d.ts"/>

/**
 * @obj
 * @desc 操作函数的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  curry - 将传入的函数柯里化
 * @method  compose - 将所有传入的函数从右向左组合起来
 */
const fn: FunctionModule = {
  curry: function <Return>(fn: Function): CurryFunction<Return> {
    let paramsLength: number = fn.length;

    function closure(params: any[]): CurryFunction<Return> {

      let wrapper: CurryFunction<Return> = function (...newParams: any[]) {
        let allParams = [...params, ...newParams];

        if (allParams.length < paramsLength) {
          return closure(allParams);
        } else {
          return fn.apply(null, allParams);
        }
      };

      return wrapper;
    }

    return closure([]);
  },
  compose: function <Return>(...fn: any[]): (...params: any[]) => Return {
    return (...params: any[]): Return => {
      let i = fn.length - 1;
      let result = fn[i].apply(null, params);

      while (--i >= 0) {
        result = fn[i](result);
      }

      return result;
    };
  },
  debounce: function <Return>(
    fn: (...params: any[]) => Return,
    wait: number,
    immediate: boolean
  ): Executor<Return> {
    const now: () => number = Date.now.bind(Date);
    let lastTime: number = 0;
    let timer: number = null;
    let params: IArguments = null;
    let _this: Function | null = null;

    function later(): void {
      const nowTime: number = now();

      if (nowTime - lastTime < wait) {
        const remainTime = wait - (nowTime - lastTime);

        timer = setTimeout(later, remainTime);
      } else {
        debouncer.result = fn.apply(_this, params);

        timer = null;
        _this = null;
        params = null;
      }
    }

    function execute(): (Return | null) {
      lastTime = now();
      _this = this;
      params = arguments;

      try {
        if (immediate && timer === null) {
          debouncer.result = fn.apply(_this, params);
        }

        return debouncer.result;
      } finally {
        if (timer === null) {
          timer = setTimeout(later, wait);
        }
      }
    }

    const debouncer: Executor<Return> = {
      execute,
      result: null,
    };

    return debouncer;
  },
  throttle: function <Return>(
    fn: (...params: any[]) => Return,
    wait: number,
    {
      isExecuteAtStart = true,
      isExecuteAtEnd = true,
    }: ThrottleOptions = {
      isExecuteAtStart: true,
      isExecuteAtEnd: true,
    }
  ): Executor<Return> {
    let timer: number = null;
    let _this: Function = null;
    let params: IArguments = null;

    function execute(): (Return | null) {
      _this = this;
      params = arguments;

      if (isExecuteAtStart && timer === null) {
        executor.result = fn.apply(_this, params);
        _this = null;
        params = null;
      }

      if (isExecuteAtEnd) {
        if (timer === null) {
          timer = setTimeout(function () {
            executor.result = fn.apply(_this, params);
            _this = null;
            params = null;
            timer = null;
          }, wait);
        }
      }

      return executor.result;
    }

    const executor: Executor<Return> = {
      execute,
      result: null
    };

    return executor;
  }
};

export default fn;
export const curry = fn.curry;
export const compose = fn.compose;
export const debounce = fn.debounce;
export const throttle = fn.throttle;

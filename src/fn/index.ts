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
  }
};

export default fn;

/// <reference path="index.d.ts"/>
import string from '../string/index';

/**
 * @obj
 * @desc 操作日期的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method createFormatDate - 传入日期格式，返回已毫秒数做参数的日期格式化函数。详情见本函数。
 */
const date: DateModule = {
  /**
   * @func
   * @desc 格式化日期的函数。
   * @param {string} format - 需要的日期的格式。如:
                           'yy-MM-dd hh:mm:ss ww'(ww为星期,小写w为英文，大写W为中文)
                           'MM dd，yyyy hh:mm:ss'等等
 * @return {function} 返回一个需要传入毫秒数作为参数的函数。
   */
  createFormatDate: function (format: string = 'YYYY/MM/DD hh:mm'): (ms: number) => string {
    let replaceFormat = string.replace(/[a-zA-Z]+/g);

    return (ms: number): string => {
      const dateFunctions: DateFnNameObj = {
        'Y': 'getFullYear',
        'M': 'getMonth',
        'D': 'getDate',
        'h': 'getHours',
        'm': 'getMinutes',
        's': 'getSeconds',
        'w': 'getDay',
        'W': 'getDay'
      };
      const weeks: ArrayObject = {
        'w': ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'],
        'W': ['日', '一', '二', '三', '四', '五', '六'].map(week => `星期${week}`)
      };
      let date: Date = new Date(ms);

      return replaceFormat(format, (matchStr: string): string => {
        let dateFuncName: DateFnName | undefined = dateFunctions[matchStr[0]];

        if (dateFuncName) {
          if (dateFuncName === 'getMonth') {
            const str = `0000${date[dateFuncName]() + 1}`;

            return str.substring(str.length - matchStr.length);
          } else if (dateFuncName === 'getDay') {
            return weeks[matchStr[0]][date[dateFuncName]()];
          } else {
            const str = '0000' + date[dateFuncName]();

            return str.substring(str.length - matchStr.length);
          }
        } else {
          return matchStr;
        }
      });
    };
  }
};

export default date;

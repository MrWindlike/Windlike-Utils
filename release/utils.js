"use strict";
/// <reference path="declare.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./array/index");
var index_2 = require("./date/index");
var index_3 = require("./fn/index");
var index_4 = require("./number/index");
var index_5 = require("./net/index");
var index_6 = require("./object/index");
var index_7 = require("./string/index");
var index_8 = require("./verification/index");
/**
 * @obj
 * @desc  工具实例。部分函数使用到ES6的语法，请确保你的浏览器支持。
 * @part  array -  数组
 * @part  date -  日期
 * @part  fn -  函数
 * @part  number -  数字
 * @part  net -  网络
 * @part  object -  对象
 * @part  string -  字符串
 * @part  verification -  验证
 */
var utils = { array: index_1.default, date: index_2.default, fn: index_3.default, number: index_4.default, net: index_5.default, object: index_6.default, string: index_7.default, verification: index_8.default };
index_6.default.valueEqual({
    a: 1,
    b: 2,
}, {
    a: 1,
    b: '2',
});
exports.default = utils;
//# sourceMappingURL=utils.js.map
"use strict";
/// <reference path="index.d.ts"/>
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var _this = null;
var array = _this = {
    /* 比较相关函数 */
    /**
     * @func
     * @desc 比较两个数组的长度
     * @return 0 - 相等
     * @return >0 - 第一个大于第二个的长度
     * @return <0 - 第一个小于第二个的长度
     */
    compareLength: function (firstArray, secondArray) {
        return firstArray.length - secondArray.length;
    },
    equal: function (firstArray, secondArray) {
        if (_this.compareLength(firstArray, secondArray) !== 0) {
            return false;
        }
        for (var i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) {
                return false;
            }
        }
        return true;
    },
    /* 删除相关函数 */
    deleteItem: function (array, value) {
        var tempArray = __spread(array);
        var index = tempArray.indexOf(value);
        if (index !== -1) {
            tempArray.splice(index, 1);
        }
        return tempArray;
    },
    deleteItems: function (array, value) {
        return array.filter(function (item) { return item !== value; });
    },
    deleteItemsExcept: function (array, exceptArray) {
        return array.filter(function (value) { return exceptArray.includes(value); });
    },
    /* 原生封装 */
    map: function (fn) {
        return function (array) { return array.map(fn); };
    }
};
exports.default = array;
//# sourceMappingURL=index.js.map
"use strict";
/// <reference path="index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../string/index");
/**
 * @obj
 * @desc 操作日期的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method formatDate - 传入日期格式，返回已毫秒数做参数的日期格式化函数。详情见本函数。
 */
var date = {
    /**
     * @func
     * @desc 格式化日期的函数。
     * @param {string} format - 需要的日期的格式。如:
                             'yy-MM-dd hh:mm:ss ww'(ww为星期,小写w为英文，大写W为中文)
                             'MM dd，yyyy hh:mm:ss'等等
   * @return {function} 返回一个需要传入毫秒数作为参数的函数。
     */
    formatDate: function (format) {
        if (format === void 0) { format = 'YYYY/MM/DD hh:mm'; }
        var replaceFormat = index_1.default.replace(/[a-zA-Z]+/g);
        return function (ms) {
            var dateFunctions = {
                'Y': 'getFullYear',
                'M': 'getMonth',
                'D': 'getDate',
                'h': 'getHours',
                'm': 'getMinutes',
                's': 'getSeconds',
                'w': 'getDay',
                'W': 'getDay'
            };
            var weeks = {
                'w': ['Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.', 'Sun.'],
                'W': ['日', '一', '二', '三', '四', '五', '六'].map(function (week) { return "\u661F\u671F" + week; })
            };
            var date = new Date(ms);
            return replaceFormat(format, function (matchStr) {
                var dateFuncName = dateFunctions[matchStr[0]];
                if (dateFuncName) {
                    if (dateFuncName === 'getMonth') {
                        var str = "0000" + (date[dateFuncName]() + 1);
                        return str.substring(str.length - matchStr.length);
                    }
                    else if (dateFuncName === 'getDay') {
                        return weeks[matchStr[0]][date[dateFuncName]()];
                    }
                    else {
                        var str = '0000' + date[dateFuncName]();
                        return str.substring(str.length - matchStr.length);
                    }
                }
                else {
                    return matchStr;
                }
            });
        };
    }
};
exports.default = date;
//# sourceMappingURL=index.js.map
"use strict";
/// <reference path="index.d.ts"/>
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @obj
 * @desc 操作函数的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  curry - 将传入的函数柯里化
 * @method  compose - 将所有传入的函数从右向左组合起来
 */
var fn = {
    curry: function (fn) {
        var paramsLength = fn.length;
        function closure(params) {
            var wrapper = function () {
                var newParams = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    newParams[_i] = arguments[_i];
                }
                var allParams = __spread(params, newParams);
                if (allParams.length < paramsLength) {
                    return closure(allParams);
                }
                else {
                    return fn.apply(null, allParams);
                }
            };
            return wrapper;
        }
        return closure([]);
    },
    compose: function () {
        var fn = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fn[_i] = arguments[_i];
        }
        return function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var i = fn.length - 1;
            var result = fn[i].apply(null, params);
            while (--i >= 0) {
                result = fn[i](result);
            }
            return result;
        };
    }
};
exports.default = fn;
//# sourceMappingURL=index.js.map
"use strict";
/// <reference path="index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../string/index");
var index_2 = require("../array/index");
var index_3 = require("../fn/index");
/**
 * @obj
 * @desc  desc
 * @method  parseParams -  解析URL的参数部分的函数
 * @method  parseUrl -  解析URL的函数
 */
var net = {
    parseParams: function (locationSearch) {
        var first = function (arr) { return arr[0]; };
        var last = function (arr) { return arr[arr.length - 1]; };
        var hasQuestionMark = function (locationSearch) { return locationSearch.includes('?') ? locationSearch : "?" + locationSearch; };
        var separateOutParams = index_3.default.compose(last, index_1.default.split('?'), hasQuestionMark);
        var groupingParams = index_3.default.compose(index_2.default.map(index_1.default.split('=')), index_1.default.split('&'));
        var getParams = function (paramsArr) {
            var params = {};
            paramsArr.forEach(function (param) {
                if (first(param)) {
                    params[first(param)] = last(param);
                }
            });
            return params;
        };
        var paramsStr = separateOutParams(locationSearch);
        var paramsArr = groupingParams(paramsStr);
        var params = getParams(paramsArr);
        return params;
    },
    parseUrl: function (url) {
        var HOST_PORT_REGEXP = /^(http:\/\/|https:\/\/)[0-9a-zA-Z\.:]+/;
        var HOST_REGEXP = /^(http:\/\/|https:\/\/)[0-9a-zA-Z\.]+/;
        /* function */
        var first = function (arr) { return arr[0]; };
        var last = function (arr) { return arr[arr.length - 1]; };
        var checkPort = function (port) { return port ? port : 80; };
        var checkPath = function (path) { return path ? path : '/'; };
        var checkParams = function (url) { return url.includes('?') ? url : ''; };
        var separateOutHref = index_3.default.compose(first, index_1.default.split('?'));
        var separateOutParams = index_3.default.compose(last, index_1.default.split('?'), checkParams);
        var matchHost = index_3.default.compose(first, index_1.default.match(HOST_PORT_REGEXP));
        var groupingParams = index_3.default.compose(index_2.default.map(index_1.default.split('=')), index_1.default.split('&'));
        var getParams = function (paramsArr) {
            var params = {};
            paramsArr.forEach(function (param) {
                if (first(param)) {
                    params[first(param)] = last(param);
                }
            });
            return params;
        };
        var getHost = index_3.default.compose(first, index_1.default.match(HOST_REGEXP));
        var getPort = function (host) { return index_3.default.compose(checkPort, last, index_1.default.split(':'), last, index_1.default.split(host)); };
        /* var */
        var href = separateOutHref(url);
        var paramsStr = separateOutParams(url);
        var hostWithPort = matchHost(href);
        var host = getHost(hostWithPort);
        var port = getPort(host)(hostWithPort);
        var path = index_3.default.compose(checkPath, last, index_1.default.split(hostWithPort))(href);
        var paramsArr = groupingParams(paramsStr);
        var params = getParams(paramsArr);
        var urlMsg = { url: url, host: host, port: port, path: path, params: params };
        return urlMsg;
    }
};
exports.default = net;
//# sourceMappingURL=index.js.map
"use strict";
/// <reference path="index.d.ts"/>
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @obj
 * @desc  数字的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  random -  返回一个可以产生符合条件的随机数的函数
 */
var number = {
    random: function (min, max, float) {
        if (min === void 0) { min = 0; }
        return function () {
            var _a;
            if (min > max) {
                _a = __read([max, min], 2), min = _a[0], max = _a[1];
            }
            if (float || min % 1 || max % 1) {
                return min + Math.random() * (max - min);
            }
            return min + Math.floor(Math.random() * (max - min + 1));
        };
    }
};
exports.default = number;
//# sourceMappingURL=index.js.map
"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="index.d.ts"/>
/**
 * @obj
 * @desc 操作对象的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method valueEqual - 判断两个对象的值是否相等
 */
var _this = null;
var object = _this = {
    valueEqual: function (firstObj, secondObj) {
        var e_1, _a;
        var firstEntries = Object.entries(firstObj);
        var secondEntries = Object.entries(secondObj);
        if (firstEntries.length !== secondEntries.length) {
            return false;
        }
        try {
            for (var firstEntries_1 = __values(firstEntries), firstEntries_1_1 = firstEntries_1.next(); !firstEntries_1_1.done; firstEntries_1_1 = firstEntries_1.next()) {
                var _b = __read(firstEntries_1_1.value, 2), key = _b[0], value = _b[1];
                var firstValue = firstObj[key];
                var secondValue = secondObj[key];
                if (typeof firstValue !== typeof secondValue) {
                    return false;
                }
                else if (typeof firstValue === 'object') {
                    if (!_this.valueEqual(firstValue, secondValue)) {
                        return false;
                    }
                }
                else {
                    if (firstValue !== secondValue) {
                        return false;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (firstEntries_1_1 && !firstEntries_1_1.done && (_a = firstEntries_1.return)) _a.call(firstEntries_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    }
};
exports.default = object;
//# sourceMappingURL=index.js.map
"use strict";
/// <reference path="index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @obj
 * @desc 操作字符串的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method replace - 传入匹配规则参数，返回一个符合改匹配规则的函数
 * @method escapedUnicode - 将形如'&#dddd;'(d为0到9)的Unicode转义成正常字符
 * @method split - 返回分割该字符的函数
 * @method match - 返回匹配该正则的函数
 */
var string = {
    replace: function (match) {
        return function (str, substitute) { return str.replace(match, substitute); };
    },
    escapedUnicode: function (str) {
        var replaceUnicodeWithChar = this.replace(new RegExp(/&#(\d+);/g));
        return replaceUnicodeWithChar(str, function (substring, unicode) { return String.fromCharCode(unicode); });
    },
    split: function (char) {
        return function (str) { return str.split(char); };
    },
    match: function (regexp) {
        return function (str) { return str.match(regexp); };
    }
};
exports.default = string;
//# sourceMappingURL=index.js.map
"use strict";
/// <reference path="index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @obj
 * @desc 验证的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  checkRe -  返回验证是否匹配该正则的函数
 * @method  checkLength -  返回验证是否匹配长度的函数
 * @method  check -  返回验证是否匹配该类型的函数
 */
var _this = null;
var verification = _this = {
    _phoneRE: /^(13[0-9]|15[012356789]|18[0-9]|17[678]|14[57])[0-9]{8}$/,
    _emailRE: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
    checkRe: function (re) {
        return function (checkedStr) {
            return re.test(checkedStr);
        };
    },
    checkLength: function (min, max) {
        if (min === void 0) { min = 0; }
        return function (str) { return str.length >= min && str.length <= max; };
    },
    check: function (checkType) {
        return this.checkRe(this["_" + checkType + "RE"]);
    }
};
exports.default = verification;
//# sourceMappingURL=index.js.map
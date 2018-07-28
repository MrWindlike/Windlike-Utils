/// <reference path="declare.d.ts"/>

import array from './array/index';
import date from './date/index';
import fn from './fn/index';
import math from './math/index';
import number from './number/index';
import net from './net/index';
import object from './object/index';
import string from './string/index';
import verification from './verification/index';

/**
 * @obj
 * @desc  工具实例。部分函数使用到ES6的语法，请确保你的浏览器支持。
 * @part  array -  数组
 * @part  date -  日期
 * @part  fn -  函数
 * @part  math -  数学
 * @part  number -  数字
 * @part  net -  网络
 * @part  object -  对象
 * @part  string -  字符串
 * @part  verification -  验证
 */
let utils = { array, date, fn, math, number, net, object, string, verification };

export default utils;

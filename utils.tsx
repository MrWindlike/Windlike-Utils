import array from './array';
import date from './date';
import fn from './fn';
import math from './math';
import net from './net';
import string from './string';
import timing from './timing';
import verification from './verification';

interface Instance {
	[propsName: string]: any
}

interface Utils {
	[propsName: string]: Instance
}

/**
 * @obj
 * @desc  工具实例。部分函数使用到ES6的语法，请确保你的浏览器支持。
 * @part  array -  数组
 * @part  date -  日期
 * @part  fn -  函数
 * @part  math -  数学
 * @part  net -  网络
 * @part  string -  字符串
 * @part  timing -  耗时计算
 * @part  verification -  验证
 */
let utils: Utils = {array, date, fn, math, net, string, timing, verification};

export default utils;
export {array, date, fn, math, net, string, timing, verification};

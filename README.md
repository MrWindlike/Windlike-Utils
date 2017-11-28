# Windlike-Utils
## 基于函数式编程的工具类函数

### 版本信息
#### v1.0.0 (2017/11/28 17:13)  
* 项目第一次上线
* 包含八大类型工具函数
### 模块目录

 * @obj
 * @desc  基于函数式编程的工具类函数。
 * [@part  array -  数组](#1-array)
 * [@part  date -  日期](#2-date)
 * [@part  fn -  函数](#3-fn)
 * [@part  math -  数学](#4-math)
 * [@part  net -  网络](#5-net)
 * [@part  string -  字符串](#6-string)
 * [@part  timing -  耗时计算](#7-timing)
 * [@part  verification -  验证](#8-verification)
 
 ### 模块
 
 #### 1. array
 ```Javascript
 /**
 * @obj
 * @desc 操作数组的相关方法。所有函数不会改变实参，会返回操作后的结果。
 * @method compareLength -  比较两个数组的长度。(firstArray: any[], secondArray: any[])=> number
 * @method equal -  比较两个数组的值是否相等。<T>(firstArray: T[], secondArray: T[])=> boolean
 * @method deleteValue -  从数组里删除第一个相应值，返回新数组。<T>(array: T[], value: T)=> T[]
 * @method deleteValueAll -  从数组里删除所有相应值，返回新数组。<T>(array: T[], value: T)=> T[]
 * @method deleteSomeExcept -  从数组里删除所有不匹配元素，返回新数组。<T>(array: T[], exceptArray: T[])=> T[]
 * @method map -  封装原生map。<T>(fn: any)=> (array: T[])=> T[]
 */
 ```
 
 #### 2. date
 ```Javascript
 /**
 * @obj
 * @desc 操作日期的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method formatDate - 传入日期格式，返回已毫秒数做参数的日期格式化函数。详情见本函数。(format: string)=> (date: number)=> string
 */
```

```Javascript
/**  
 * @func formatDate
 * @desc 格式化日期的函数。
 * @param {string} format - 需要的日期的格式。如:  
 'yy-MM-dd hh:mm:ss ww'(ww为星期,小写w为英文，大写W为中文)  
 'MM dd，yyyy hh:mm:ss'等等
 * @return {function} 返回一个需要传入毫秒数作为参数的函数。
 */
```
 
#### 3. fn
```Javascript
/**
 * @obj
 * @desc 操作函数的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  curry - 将传入的函数柯里化。(fn: typeof Function)=> (...newParams: any[])=> any
 * @method  compose - 将所有传入的函数从右向左组合起来。(...fn: any[])=> (...params: any[])=> any
 */
```

#### 4. math
```Javascript
/**
 * @obj
 * @desc  数学的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  random -  返回一个可以产生符合条件的随机数的函数。(min: number, max: number, float: boolean)=> ()=> number
 */
```

#### 5. net
```Javascript
/**
 * @obj
 * @desc  desc
 * @method  parseParams -  解析location.search的函数,返回一个对象。parseParams: (locationSearch: string)=> object
 * @method  parseUrl -  解析URL的函数。(url: string)=> object。(url: string)=> object
 * @method  jsonp -  使用JSONP发起跨域请求。(url: string, name: string)=> Promise<{}>
 */
```
 
#### 6. string
```Javascript
/**
 * @obj
 * @desc 操作字符串的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method replace - 传入匹配规则参数，返回一个符合改匹配规则的函数。(match: RegExp | string)=> (str: string, substitute: any)=> string
 * @method escapedUnicode - 将形如'&#dddd;'(d为0到9)的Unicode转义成正常字符。(str: string)=> string
 * @method split - 返回分割该字符的函数。(char: string | RegExp)=> (str: string)=> string[]
 * @method match - 返回匹配该正则的函数。(regexp: RegExp)=> (str: string)=> string[]
 */
```
 
#### 7. timing
```Javascript
/**
 * @obj
 * @desc 计算各种操作花费时间，测试性能。
 * @method  calculateFuncTime -  计算函数耗时。(fn: ()=> any, ...params: any[])=> number
 * @method  calculateFirstPaintTime -  计算白屏时间。()=> number
 */
```

#### 8. verification
```Javascript
/**
 * @obj
 * @desc 验证的相关方法。所有函数不会改变实参的值，会返回操作后的结果。
 * @method  checkRe -  返回验证是否匹配该正则的函数。(re: RegExp)=> (checkedStr: string)=> boolean
 * @method  checkLength -  返回验证是否匹配长度[min, max]的函数。(min: number, max: number)=> (str: string)=> boolean
 * @method  check -  返回验证是否匹配该类型(email,phone)的函数。(checkType: string)=> (checkedStr: string)=> boolean
 */
```

 [回到顶部](#Windlike-Utils)

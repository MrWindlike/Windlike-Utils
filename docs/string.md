# String
```js
interface StringModule {
  replace: (match: RegExp | string) => (str: string, substitute: any) => string;
  split: (char: string | RegExp) => (str: string) => string[];
  match: (regexp: RegExp) => (str: string) => string[];
}
```

## replace
#### Describe
对原生```replace```进行封装过的函数。
```js
(match: RegExp | string) => (str: string, substitute: any) => string;
```

#### Arguments
  - match(RegExp | string): 匹配符

#### Returns
(```(str: string, substitute: any) => string```): 传入原字符串和代替字符串，返回新字符串的函数。

#### Example
```js
const str = 'I\'m Windlike.';
const replaceWindlike = utils.string.replace('Windlike');

replaceWindlike(str, 'I');  // I'm I.
```

## split
#### Describe
对原生```split```进行封装过的函数。
```js
(char: string | RegExp) => (str: string) => string[];
```

#### Arguments
  - char(RegExp | string): 分割符

#### Returns
(```(str: string) => string[]```): 传入原字符串，返回分割后的数组的函数。

#### Example
```js
const str = 'I And You';
const splitSpace = utils.string.split(' ');

splitSpace(str);  // ['I', 'And', 'You']
```

## match
#### Describe
对原生```match```进行封装过的函数。
```js
(regexp: RegExp) => (str: string) => string[];
```

#### Arguments
  - regexp(RegExp): 正则表达式

#### Returns
(```(str: string) => string[]```): 传入原字符串，返回匹配到的字符串数组的函数。

#### Example
```js
const re = /[\w]+/g;
const str = 'I am a string.';
const matchWork = utils.string.match(re);

matchWork(str);  // ['I', 'am', 'a', 'string']
```
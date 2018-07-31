# Number
```js
interface NumberModule {
  createRandomFunction: (min: number, max: number, float: boolean) => () => number;
}
```

## createRandomFunction
#### Describe
创建产生随机数函数的函数。
```js
(min: number, max: number, float: boolean) => () => number;
```

#### Arguments
  - min(number)
  - max(number)
  - float(boolean): 是否有小数

#### Returns
(```() => number```): 产生随机数的函数。

#### Example
```js
const createRandom = utils.number.createRandomFunction(100, 1, true);

createRandom();
```
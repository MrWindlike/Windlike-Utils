# Number
```ts
interface NumberModule {
  createRandomFunction: (min: number, max: number, float: boolean) => () => number;
}
```

## createRandomFunction
### Describe
创建产生随机数函数的函数。
```ts
(min: number, max: number, float: boolean) => () => number;
```

### Arguments
  - min(number)
  - max(number)
  - float(boolean): 是否有小数

### Returns
(```() => number```): 产生随机数的函数。

### Example
```ts
const createRandom = utils.number.createRandomFunction(100, 1, true);

createRandom();
```
# Fn
```js
interface FunctionModule {
  curry: <Return>(fn: (...params: any[]) => Return) => CurryFunction<Return>;
  compose: <Return>(...fn: any[]) => (...params: any[]) => Return;
}

interface CurryFunction<Return> {
  (...newParams: any[]): Return | CurryFunction<Return>
}
```

## curry
### Describe
将函数柯里化。
```js
interface CurryFunction<Return> {
  (...newParams: any[]): Return | CurryFunction<Return>
}

<Return>(fn: (...params: any[]) => Return) => CurryFunction<Return>;
```

### Arguments
  - fn(```(...params: any[]) => Return) => CurryFunction<Return>```): 需要柯里化的函数。

### Returns
(```CurryFunction<Return>```): 返回新的函数或者结果。

### Example
```js
const add = (a: number, b: number, c: number): number => a + b + c;
const curryAdd: any = utils.fn.curry(add);

curryAdd(1, 2, 3);  // 6
curryAdd(1, 2)(4);  // 7
curryAdd(1)(3)(5);  // 9
curryAdd(1)(2, 3);  // 6
```

## compose
### Describe
将传入的函数从右往左组合成新的函数。
```js
<Return>(...fn: any[]) => (...params: any[]) => Return;
```

### Arguments
  - ...fn(any[]): 函数数组。

### Returns
(```(...params: any[]) => Return```): 组合成的新函数。

### Example
```js
const plusOne = (num) => num * 1 + 1;
const double = (num) => num * 2;
const plusOneAndDouble = utils.fn.compose<number>(double, plusOne);  // 先加一后乘二

plusOneAndDouble(1);  // 4
plusOneAndDouble(2);  // 6
```
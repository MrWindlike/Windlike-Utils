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
#### Describe
```js
interface CurryFunction<Return> {
  (...newParams: any[]): Return | CurryFunction<Return>
}

<Return>(fn: (...params: any[]) => Return) => CurryFunction<Return>;
```

#### Arguments
  - fn(```(...params: any[]) => Return) => CurryFunction<Return>```)

#### Returns
(```CurryFunction<Return>```)

#### Example
```js
const add = (a: number, b: number, c: number): number => a + b + c;
const curryAdd: any = utils.fn.curry(add);

curryAdd(1, 2, 3);  // 6
curryAdd(1, 2)(4);  // 7
curryAdd(1)(3)(5);  // 9
curryAdd(1)(2, 3);  // 6
```

## compose
#### Describe
Compose the functions from right to left.
```js
<Return>(...fn: any[]) => (...params: any[]) => Return;
```

#### Arguments
  - ...fn(any[])

#### Returns
(```(...params: any[]) => Return```)

#### Example
```js
const plusOne = (num) => num * 1 + 1;
const double = (num) => num * 2;
const plusOneAndDouble = utils.fn.compose<number>(double, plusOne);  // 先加一后乘二

plusOneAndDouble(1);  // 4
plusOneAndDouble(2);  // 6
```

## debounce
#### Describe
Change multiple consecutive executions over a period of time.
```js
<Return>(
    fn: (...params: any[]) => Return,
    wait: number,
    immediate: boolean
  ) => Executor<Return>;
```

#### Arguments
  - fn
  - wait
  - immediate: is execute immediately?

#### Returns
```
interface Executor<Return> {
  execute: (...params: any[]) => (Return | null);
  result: Return;
}
```
`Executor<Return>`

#### Example
```js
const executor = utils.fn.debounce(
  fetch,
  300,
  false
);

input.addEvetListener('input', function(e) {
  const result = executor.execute('/api');
});

const result = excutor.result;  // get current result
```

## throttle
#### Describe
Reduce the frequency of execution

```js
interface ThrottleOptions {
  isExecuteAtStart: boolean;  // default is true
  isExecuteAtEnd: boolean;  // default is true
}

<Return>(
    fn: (...params: any[]) => Return,
    wait: number,
    options?: ThrottleOptions
  ) => Executor<Return>;
```

#### Arguments
  - fn
  - wait
  - options?

#### Returns
```
interface Executor<Return> {
  execute: (...params: any[]) => (Return | null);
  result: Return;
}
```
`Executor<Return>`

#### Example
```js
const executor = utils.fn.throttle(
  fetch,
  300,
  {
    isExecuteAtStart: true,
    isExecuteAtEnd: false,
  }
);

input.addEvetListener('click', function(e) {
  const result = executor.execute('/api');
});

const result = excutor.result;  // get current result
```
# Windlike-Utils &middot; [![npm version](https://img.shields.io/npm/v/windlike-utils.svg?style=flat)](https://www.npmjs.com/package/windlike-utils)

Windlike-Utils is a tool library developed based on functional programming ideas.

- **Modules:** Windlike-Utils divide the tool into several modules which like `array`、`object`、`string` and so on.It can be easily found and used.
- **Functional:** Each function only has the same input parameters, and the output result is unique.Just like `y=f(x)` in mathematics.As long as `x` is unchanged, the output `y` is also unchanged.To ensure the uniqueness of the output and the reusability of the variables, Some dirty functions also do delayed output processing.For examples, `number.random` returns a function which can generate a random number, instead of the result of the random number.
- **Immutable:** Any arguments entered is immutable and new results will be returned.

## Install

```npm
npm install windlike-utils --save
```

## Feature

- Format date:

  ```js
  const ms = 837043200000; // 1996-07-11 08:00:00

  utils.date.createFormatDate("YYYY-MM-DD hh:mm:ss w")(ms); // 1996-07-11 08:00:00 Thur.
  utils.date.createFormatDate("YY-MM-DD hh:mm:ss W")(ms); // 96-07-11 08:00:00 星期四
  ```

- Currying

  ```js
  const add = (a: number, b: number, c: number): number => a + b + c;
  const curryAdd: any = utils.fn.curry(add);

  curryAdd(1, 2, 3); // 6
  curryAdd(1, 2)(4); // 7
  curryAdd(1)(3)(5); // 9
  curryAdd(1)(2, 3); // 6
  ```

- Parse Url

  ```js
  const URL = 'https://github.com/MrWindlike/Windlike-Utils?key=value';
  const result = utils.net.parseUrl(URL); 
  // {
  //   url: URL,
  //   host: 'https://github.com',
  //   port: 80,
  //   path: '/MrWindlike/Windlike-Utils',
  //   params: {
  //     key: 'value',
  //   },
  // }
  ```

<a name="2.1.0"></a>
# 2.1.0 (2018-09-05)

### New features
`Function` Module:
- add `debounce`
- add `throttle`

`Array` Module:
- add `shallowCompare`
- add `deepCompare`
- remove `equal`

`Object` Module:
- add `shallowCompare`
- add `deepCompare`
- remove `valueEqual`

`Math` Module:
- add `add`: add the incoming parameters together, and return the result.
  ```js
  utils.math.add(0.1, 0.2);  // 0.3
  ```

## Contribute

Open an issue or PR.😄

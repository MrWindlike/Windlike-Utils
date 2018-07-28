## Array
```ts
interface ArrayModule {
  compareLength: (firstArray: any[], secondArray: any[]) => number;
  equal: <T>(firstArray: T[], secondArray: T[]) => boolean;
  deleteItem: <T>(array: T[], value: T) => T[];
  deleteItems: <T>(array: T[], value: T) => T[];
  deleteItemsExcept: <T>(array: T[], exceptArray: T[]) => T[];
  map: <T>(fn: any) => (array: T[]) => T[];
}
```

### compareLength
#### Describe
比较两个数组的长度。
```ts
(firstArray: any[], secondArray: any[]) => number;
```

#### Arguments
  - firstArray(any[])
  - secondArray(any[])

#### Returns
(number): 第一个数组长度与第二个数组长度的差值。

#### Example
```ts
const firstArray = [1, 2, 3, {}];
const secondArray = [{}, 3, 2, 1];
const result: number = utils.array.compareLength(firstArray, secondArray);  // 0
```

### equal
#### Describe
比较两个数组的值，使用严格等于进行比较。
```ts
<T>(firstArray: T[], secondArray: T[]) => boolean;
```

#### Arguments
  - firstArray(any[])
  - secondArray(any[])

#### Returns
(boolean)

#### Example
```ts
utils.array.equal([1, 2, { key: 'value' }], [1, 2, { key: 'value' }]);  // false
```

### deleteItem
#### Describe
删除数组里第一个找到的值，然后返回新数组。
```ts
<T>(array: T[], value: T) => T[];
```

#### Arguments
  - array(T[])
  - value(T): 要删除的值

#### Returns
(T[]): 返回的新数组

#### Example
```ts
const array = [1, 2, 3];

utils.array.deleteItem(array, 2);  // [1, 3]
```

### deleteItems
#### Describe
删除数组里所有与值相等的项，然后返回新数组。
```ts
<T>(array: T[], value: T) => T[];
```

#### Arguments
  - array(T[])
  - value(T): 要删除的值

#### Returns
(T[]): 返回的新数组

#### Example
```js
const array = [1, 9, 9, 6];

utils.array.deleteItems(array, 9);  // [1, 6]
```

### deleteItemsExcept
#### Describe
删除数组里另外一个数组里没有的值。
```ts
<T>(array: T[], exceptArray: T[]) => T[];
```

#### Arguments
  - array(T[])
  - exceptArray(T[]): 要删除的值

#### Returns
(T[]): 返回的新数组

#### Example
```ts
const array = [1, '9', 9, 6];

utils.array.deleteItemsExcept(array, [1, 2, 3]);  // [1]
utils.array.deleteItemsExcept(array, [1, 9, 3]);  // [1, 9]
utils.array.deleteItemsExcept(array, [1, '9', 6]);  // [1, '9', 6]
```

### deleteItemsExcept
#### Describe
对原生数组```map```进行的封装。
```ts
<T>(fn: any) => (array: T[]) => T[]
```

#### Arguments
  - fn: ```map```要执行的回调函数

#### Returns
(```(array: T[]) => T[]```): 需要传入数组做为参数的函数

#### Example
```ts
const plusOne = (value) => 1 + value;
const array = [1, 9, 9, 6];
const plusOneMap = utils.array.map(plusOne);

plusOneMap(array);  // [2, 10, 10, 7]
```

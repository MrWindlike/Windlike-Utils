# Array
```js
interface ArrayModule {
  compareLength: (firstArray: any[], secondArray: any[]) => number;
  equal: <T>(firstArray: T[], secondArray: T[]) => boolean;
  deleteItem: <T>(array: T[], value: T) => T[];
  deleteItems: <T>(array: T[], value: T) => T[];
  deleteItemsExcept: <T>(array: T[], exceptArray: T[]) => T[];
  map: <T>(fn: any) => (array: T[]) => T[];
}
```

## compareLength
#### Describe
Compare the length of two arrays.
```js
(firstArray: any[], secondArray: any[]) => number;
```

#### Arguments
  - firstArray(any[])
  - secondArray(any[])

#### Returns
(number): The difference between the length of the first array and the length of the second array.

#### Example
```js
const firstArray = [1, 2, 3, {}];
const secondArray = [{}, 3, 2, 1];
const result: number = utils.array.compareLength(firstArray, secondArray);  // 0
```

## shallowCompare
#### Describe
Compare the values of two arrays.
```js
<T>(firstArray: T[], secondArray: T[]) => boolean;
```

#### Arguments
  - firstArray(any[])
  - secondArray(any[])

#### Returns
(boolean)

#### Example
```js
utils.array.shallowCompare([1, 2], [1, 2]);  // true
utils.array.shallowCompare([1, 2, { key: 'value' }], [1, 2, { key: 'value' }]);  // false
```

## deepCompare
#### Describe
Compare the values of two arrays.
```js
<T>(firstArray: T[], secondArray: T[]) => boolean;
```

#### Arguments
  - firstArray(any[])
  - secondArray(any[])

#### Returns
(boolean)

#### Example
```js
utils.array.shallowCompare([1, 2], [1, 2]);  // true
utils.array.shallowCompare([1, 2, { key: 'value' }], [1, 2, { key: 'value' }]);  // true
```

## deleteItem
#### Describe
Delete the first item in the array equal to the value and return a new array.
```js
<T>(array: T[], value: T) => T[];
```

#### Arguments
  - array(T[])
  - value(T)

#### Returns
(T[])

#### Example
```js
const array = [1, 2, 3];

utils.array.deleteItem(array, 2);  // [1, 3]
```

## deleteItems
#### Describe
Delete the all items in the array equal to the value and return a new array.
```js
<T>(array: T[], value: T) => T[];
```

#### Arguments
  - array(T[])
  - value(T)

#### Returns
(T[])

#### Example
```js
const array = [1, 9, 9, 6];

utils.array.deleteItems(array, 9);  // [1, 6]
```

## deleteItemsExcept
#### Describe
Delete values that are not in another array in the array.
```js
<T>(array: T[], exceptArray: T[]) => T[];
```

#### Arguments
  - array(T[])
  - exceptArray(T[])

#### Returns
(T[])

#### Example
```js
const array = [1, '9', 9, 6];

utils.array.deleteItemsExcept(array, [1, 2, 3]);  // [1]
utils.array.deleteItemsExcept(array, [1, 9, 3]);  // [1, 9]
utils.array.deleteItemsExcept(array, [1, '9', 6]);  // [1, '9', 6]
```

## map
#### Describe
```js
<T>(fn: any) => (array: T[]) => T[]
```

#### Arguments
  - fn: callback function

#### Returns
(```(array: T[]) => T[]```)

#### Example
```js
const plusOne = (value) => 1 + value;
const array = [1, 9, 9, 6];
const plusOneMap = utils.array.map(plusOne);

plusOneMap(array);  // [2, 10, 10, 7]
```

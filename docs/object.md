# Object
```js
interface ObjectModule {
  valueEqual: (firstObj: AnyObject, secondObj: AnyObject) => boolean
}
```

## valueEqual
#### Describe
Determine if the values of two objects are equal.
```js
(firstObj: AnyObject, secondObj: AnyObject) => boolean;
```

#### Arguments
  - firstObj(object)
  - secondObj(object)

#### Returns
(boolean)

#### Example
```js
utils.object.valueEqual(
  {
    a: 1,
    child: {
      key: 'value'
    },
    b: 2,
    obj: {},
  },
  {
    b: 2,
    obj: {},
    a: 1,
    child: {
      key: 'value'
    },
  },
);  // true
utils.object.valueEqual(
  {
    a: 1,
    b: 2,
  },
  {
    a: 1,
    b: '2',
  }
);  // false

```

## has
#### Describe
Determine if the object has the key.
```js
(object: AnyObject, key: string) => boolean;
```

#### Arguments
  - object(object)
  - key(string)

#### Returns
(boolean)

#### Example
```js
const object = { key: 'value', nonexistent: undefined };

utils.object.has(object, 'key');  // true
utils.object.has(object, 'nonexistent');  // false
```
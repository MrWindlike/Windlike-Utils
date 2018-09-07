# Object
```js
interface ObjectModule {
  valueEqual: (firstObj: AnyObject, secondObj: AnyObject) => boolean
}
```

## shallowCompare
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
utils.object.shallowCompare(
  {
    a: 1,
    b: 2,
  },
  {
    b: 2,
    a: 1,
  },
);  // true

utils.object.shallowCompare(
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
);  // false

```

## deepCompare
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
utils.object.deepCompare(
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
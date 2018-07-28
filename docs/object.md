# Object
```js
interface ObjectModule {
  valueEqual: (firstObj: AnyObject, secondObj: AnyObject) => boolean
}
```

## valueEqual
### Describe
判断两个对象的值是否相等，会遍历子对象。
```js
(firstObj: AnyObject, secondObj: AnyObject) => boolean;
```

### Arguments
  - firstObj(object)
  - secondObj(object)

### Returns
(boolean)

### Example
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
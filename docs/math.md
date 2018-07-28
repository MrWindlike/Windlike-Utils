# Math
```js
interface MathModule {
  createSin: (height: number, width: number, offset: number) => (x: number) => number;
  createGetPointOnCircle: (radius: number, offsetX: number, offsetY: number) => (radian: number) => Point;
}

interface Point {
  x: number;
  y: number;
}
```

## createSin
#### Describe
创建sin函数，y=f(x)=height \* sin(width \* x + offset)。
```js
(height: number, width: number, offset: number) => (x: number) => number;
```

#### Arguments
  - height(number)
  - width(number)
  - offset(number)

#### Returns
(```(x: number) => number```): 传入参数返回计算结果的函数。

#### Example
```js
const sin = utils.math.createSin(2, 2, Math.PI / 2);

sin(Math.PI / 2);  // -2
```

## createGetPointOnCircle
#### Describe
创建获取点在圆上的位置的函数。
```js
interface Point {
  x: number;
  y: number;
}

(radius: number, offsetX: number, offsetY: number) => (radian: number) => Point;
```

#### Arguments
  - radius(number): 半径
  - offsetX(number): X轴偏移
  - offsetY(number): Y轴偏移

#### Returns
(```(radian: number) => Point```): 传入弧度返回计算结果的函数。

#### Example
```js
const getPointOnCircle = utils.math.createGetPointOnCircle(4, 10, 5);

getPointOnCircle(0);  // { x: 14, y: 5 }
```

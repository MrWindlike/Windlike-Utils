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
y=f(x)=height \* sin(width \* x + offset)。
```js
(height: number, width: number, offset: number) => (x: number) => number;
```

#### Arguments
  - height(number)
  - width(number)
  - offset(number)

#### Returns
(```(x: number) => number```)

#### Example
```js
const sin = utils.math.createSin(2, 2, Math.PI / 2);

sin(Math.PI / 2);  // -2
```

## createGetPointOnCircle
#### Describe
Create a function to get the point on the circle.
```js
interface Point {
  x: number;
  y: number;
}

(radius: number, offsetX: number, offsetY: number) => (radian: number) => Point;
```

#### Arguments
  - radius(number)
  - offsetX(number)
  - offsetY(number)

#### Returns
(```(radian: number) => Point```)

#### Example
```js
const getPointOnCircle = utils.math.createGetPointOnCircle(4, 10, 5);

getPointOnCircle(0);  // { x: 14, y: 5 }
```

## add
#### Describe
add the incoming parameters together, and return the result.
```js
(...numbers: number[])=> number;
```

#### Arguments
  - ...numbers

#### Returns
(```number```)

#### Example
```js
utils.math.add(0.1, 0.2);  // 0.3
```

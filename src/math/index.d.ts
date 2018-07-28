/**
 * @obj
 * @desc  数学相关函数
 * @method  createSin -  y=f(x)=height * sin(width * x + offset)
 * @method  createGetPointOnCircle -  返回获取在圆上的点的函数
 */
interface MathModule {
  createSin: (height: number, width: number, offset: number) => (x: number) => number;
  createGetPointOnCircle: (radius: number, offsetX: number, offsetY: number) => (radian: number) => Point;
}

interface Point {
  x: number;
  y: number;
}

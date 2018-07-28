/// <reference path="index.d.ts"/>

const math: MathModule = {
  createSin: function (height: number, width: number, offset: number) {
    return (x: number): number => height * Math.sin(width * x + offset);
  },
  createGetPointOnCircle: function (radius: number, offsetX: number = 0, offsetY: number = 0) {
    return (radian: number) => ({
      x: offsetX + radius * Math.cos(radian),
      y: offsetY + radius * Math.sin(radian),
    });
  }
};

export default math;

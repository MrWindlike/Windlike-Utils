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
  },
  add: function (...numbers: number[]): number {
    function getDecimalLength(n: number): number {
      const temp: string[] = n.toString().split('.');

      return temp[temp.length - 1].length;
    }

    function addTwoNumber(a: number, b: number): number {
      const firstLenth: number = getDecimalLength(a);
      const secondeLenth: number = getDecimalLength(a);
      const biggerLength: number = firstLenth > secondeLenth ? firstLenth : secondeLenth;
      const n: number = Math.pow(10, biggerLength);

      return (a * n + b * n) / n;
    }

    return numbers.reduce((previous, current) => {
      return addTwoNumber(previous, current);
    });
  },
};

export default math;
export const createSin = math.createSin;
export const createGetPointOnCircle = math.createGetPointOnCircle;
export const add = math.add;

import math from '../index';
const {
  createSin,
  createGetPointOnCircle,
} = math;

describe('Sin.', () => {
  test('Height = 2, Width = 2, Offset = PI/2', () => {
    const sin = createSin(2, 2, Math.PI / 2);

    expect(sin(Math.PI / 2)).toBe(-2);
  });
});

describe('Get point on the circle.', () => {
  test('Radius = 4, OffsetX = 10, offsetY = 5', () => {
    const getPointOnCircle = createGetPointOnCircle(4, 10, 5);
    let point = getPointOnCircle(0);

    expect(point.x).toBe(14);
    expect(point.y).toBe(5);

    point = getPointOnCircle(Math.PI / 2);

    expect(point.x).toBe(10);
    expect(point.y).toBe(9);
  });
});
import fn from '../index';
const {
  curry,
  compose,
} = fn;

test('Currying.', () => {
  const add = (a: number, b: number, c: number): number => a + b + c;
  const curryAdd: any = curry(add);

  expect(curryAdd(1, 2, 3)).toBe(6);
  expect(curryAdd(1, 2)(3)).toBe(6);
  expect(curryAdd(1)(2)(3)).toBe(6);
  expect(curryAdd(1)(2, 3)).toBe(6);
});

test('Compose', () => {
  const plusOne = (num) => num * 1 + 1;
  const double = (num) => num * 2;
  const plusOneAndDouble = compose<number>(double, plusOne);

  expect(plusOneAndDouble(1)).toBe(4);
  expect(plusOneAndDouble(2)).toBe(6);
  expect(plusOneAndDouble('2')).toBe(6);
});
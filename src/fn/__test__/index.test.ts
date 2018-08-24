import fn from '../index';
const {
  curry,
  compose,
  debounce,
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

describe('Debounce', () => {
  function plusOne(number: number) {
    return number + 1;
  }

  test('Immediate', (done) => {
    const debouncer = debounce(plusOne, 500, true);
    let result: number;

    result = debouncer.execute(1) as number;
    expect(result).toBe(2);

    setTimeout(function () {
      result = debouncer.execute(2) as number;

      expect(result).toBe(2);
    }, 200);

    setTimeout(function () {
      result = debouncer.result;
      expect(result).toBe(3);
      done();
    }, 800);
  });

  test('Delay.', function (done) {
    const debouncer = debounce(plusOne, 500, false);
    let result: number;

    result = debouncer.execute(1) as number;
    expect(result).toBe(undefined);

    setTimeout(function () {
      result = debouncer.execute(2) as number;

      expect(result).toBe(undefined);
    }, 200);

    setTimeout(function () {
      result = debouncer.result;
      expect(result).toBe(3);
      done();
    }, 800);
  });
});
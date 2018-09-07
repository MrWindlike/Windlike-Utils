import fn from '../index';
const {
  curry,
  compose,
  debounce,
  throttle,
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
    const executor = debounce(plusOne, 500, true);
    let result: number;

    result = executor.execute(1) as number;
    expect(result).toBe(2);

    setTimeout(function () {
      result = executor.execute(2) as number;

      expect(result).toBe(2);
    }, 200);

    setTimeout(function () {
      result = executor.result;
      expect(result).toBe(3);
      done();
    }, 800);
  });

  test('Delay.', function (done) {
    const executor = debounce(plusOne, 500, false);
    let result: number;

    result = executor.execute(1) as number;
    expect(result).toBe(null);

    setTimeout(function () {
      result = executor.execute(2) as number;

      expect(result).toBe(null);
    }, 200);

    setTimeout(function () {
      result = executor.result;
      expect(result).toBe(3);
      done();
    }, 800);
  });
});

describe('Throttle.', () => {
  function plusOne(number: number) {
    return number + 1;
  }

  test('Execute Twice', () => {
    const executor = throttle(plusOne, 300);
    let result: number;

    result = executor.execute(1);
    expect(result).toBe(2);

    setTimeout(function () {
      result = executor.execute(2);
      expect(result).toBe(2);
    }, 100);

    setTimeout(function () {
      expect(result).toBe(3);
    }, 400);
  });

  test('Execute Start', () => {
    const executor = throttle(plusOne, 300, {
      isExecuteAtStart: true,
      isExecuteAtEnd: false,
    });
    let result: number;

    result = executor.execute(1);
    expect(result).toBe(2);

    setTimeout(function () {
      result = executor.execute(2);
      expect(result).toBe(2);
    }, 100);

    setTimeout(function () {
      expect(result).toBe(2);
    }, 400);
  });

  test('Execute End', () => {
    const executor = throttle(plusOne, 300, {
      isExecuteAtStart: false,
      isExecuteAtEnd: true,
    });
    let result: number;

    result = executor.execute(1);
    expect(result).toBe(null);

    setTimeout(function () {
      result = executor.execute(2);
      expect(result).toBe(null);
    }, 100);

    setTimeout(function () {
      expect(result).toBe(3);
    }, 400);
  });
});
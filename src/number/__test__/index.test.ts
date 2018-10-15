import number from '../index';
const {
  createRandomFunction,
  toThousands,
} = number;

describe('Create a random number.', () => {
  test('Int between 1 to 100.', () => {
    const createRandom = createRandomFunction(100, 1, false);
    const result = createRandom();

    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(101);
    expect(result).toBe(Math.floor(result));
  });

  test('Float between 1 to 100. ', () => {
    const createRandom = createRandomFunction(100, 1, true);
    const result = createRandom();

    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(101);
  });
});

test('To Thousands', () => {
  expect(toThousands(19960711.00)).toBe('19,960,711');
  expect(toThousands(1996.0711)).toBe('1,996.0711');
  expect(toThousands('19960711')).toBe('19,960,711');
  expect(toThousands('1996.0711')).toBe('1,996.0711');
  expect(toThousands('1234567890')).toBe('1,234,567,890');
});

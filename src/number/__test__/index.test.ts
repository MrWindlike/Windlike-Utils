import number from '../index';
const {
  createRandomFunction,
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
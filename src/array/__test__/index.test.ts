import array from '../index';
const {
  compareLength,
  equal,
  deleteItem,
  deleteItems,
  deleteItemsExcept,
  map,
} = array;

describe('Compare Array\'s length.', () => {
  test('Equal', () => {
    const firstArray = [1, 2, 3, {}];
    const secondArray = [{}, 3, 2, 1];
    const result: number = compareLength(firstArray, secondArray);

    expect(result).toBe(0);
  });

  test('Less than.', () => {
    const firstArray = [1, 2, 3];
    const secondArray = [{}, 3, 2, 1];
    const result: number = compareLength(firstArray, secondArray);

    expect(result).toBeLessThan(0);
  });

  test('Great than.', () => {
    const firstArray = [1, 2, 3, {}];
    const secondArray = [3, 2, 1];
    const result: number = compareLength(firstArray, secondArray);

    expect(result).toBeGreaterThan(0);
  });
});

describe('Is Array\'s value Equal?', () => {
  test('Yes.', () => {
    expect(equal([1, 2, 3], [1, 2, 3])).toBeTruthy();
  });

  test('No.', () => {
    expect(equal([1, 2, 3], [1, '2', 3])).toBeFalsy();
    expect(equal([1, 2, { key: 'value' }], [1, 2, { key: 'value' }])).toBeFalsy();
  });
});

describe('Delete one item from Array where value is strict equal.', () => {
  test('Number Array.', () => {
    const array = [1, 2, 3];

    expect(equal(deleteItem(array, 2), [1, 3])).toBeTruthy();
    expect(equal(array, [1, 2, 3])).toBeTruthy();
  });

  test('Object Array.', () => {
    const array = [{ key: 'value' }];

    expect(deleteItem(array, { key: 'value' }).length).toBe(array.length);
  });

  test('Mixing Array.', () => {
    const array = [1, '2', '3'];

    expect(equal(deleteItem(array, '2'), [1, '3'])).toBeTruthy();
    expect(equal(array, [1, '2', '3'])).toBeTruthy();
  });
});

describe('Delete items where value is strict equal.', () => {
  test('Number Array', () => {
    const array = [1, 9, 9, 6];

    expect(equal(deleteItems(array, 9), [1, 6])).toBeTruthy();
    expect(equal(array, [1, 9, 9, 6])).toBeTruthy();
  });

  test('Object Array', () => {
    const array = [{}, { key: 'value' }];

    expect(deleteItems(array, {}).length).toBe(array.length);
  });

  test('Mixing Array', () => {
    const array = [1, '9', 9, 6];

    expect(equal(deleteItems(array, 9), [1, '9', 6])).toBeTruthy();
    expect(equal(array, [1, '9', 9, 6])).toBeTruthy();
  });
});

describe('Delete items expect value equal another Array.', () => {
  test('Number Array.', () => {
    const array = [1, 9, 9, 6];

    expect(equal(deleteItemsExcept(array, [1, 2, 3]), [1])).toBeTruthy();
    expect(equal(deleteItemsExcept(array, [1, 9, 3]), [1, 9, 9])).toBeTruthy();
    expect(equal(deleteItemsExcept(array, [1, 9, 6]), [1, 9, 9, 6])).toBeTruthy();
  });

  test('Mixing Array.', () => {
    const array = [1, '9', 9, 6];

    expect(equal(deleteItemsExcept(array, [1, 2, 3]), [1])).toBeTruthy();
    expect(equal(deleteItemsExcept(array, [1, 9, 3]), [1, 9])).toBeTruthy();
    expect(equal(deleteItemsExcept(array, [1, 9, 6]), [1, 9, 6])).toBeTruthy();
    expect(equal(deleteItemsExcept(array, [1, '9', 9, 6]), [1, '9', 9, 6])).toBeTruthy();
  });
});

describe('Map Array.', () => {
  const plusOne = (value) => 1 + value;

  test('Number Array.', () => {
    const array = [1, 9, 9, 6];

    expect(equal(map(plusOne)(array), [2, 10, 10, 7])).toBeTruthy();
  });

  test('Mixing Array.', () => {
    const array = [1, '9', 9, 6];

    expect(equal(map(plusOne)(array), [2, '19', 10, 7])).toBeTruthy();
  });
});
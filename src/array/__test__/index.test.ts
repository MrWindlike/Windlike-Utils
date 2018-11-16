import {
  compareLength,
  shallowCompare,
  deepCompare,
  deleteItem,
  deleteItems,
  deleteItemsExcept,
  map,
  removeDuplicates
} from '../index';

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

describe('Shallow compare.Is them Equal?', () => {
  test('Yes.', () => {
    expect(shallowCompare([1, 2, 3], [1, 2, 3])).toBeTruthy();
  });

  test('No.', () => {
    expect(shallowCompare([1, 2, 3], [1, '2', 3])).toBeFalsy();
    expect(shallowCompare([1, [2, 3], 4], [1, [2, 3], 4])).toBeFalsy();
    expect(shallowCompare([1, 2, { key: 'value' }], [1, 2, { key: 'value' }])).toBeFalsy();
  });
});

describe('Deep compare.Is them Equal?', () => {
  test('Yes.', () => {
    expect(deepCompare([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(deepCompare([1, [2, 3], 4], [1, [2, 3], 4])).toBeTruthy();
    expect(deepCompare([1, 2, { key: 'value' }], [1, 2, { key: 'value' }])).toBeTruthy();
  });

  test('No.', () => {
    expect(deepCompare([1, 2, 3], [1, '2', 3])).toBeFalsy();
    expect(deepCompare([1, 2, 3], [1, 3])).toBeFalsy();
  });
});

describe('Delete one item from Array where value is strict equal.', () => {
  test('Number Array.', () => {
    const array = [1, 2, 3];

    expect(shallowCompare(deleteItem(array, 2), [1, 3])).toBeTruthy();
    expect(shallowCompare(array, [1, 2, 3])).toBeTruthy();
  });

  test('Object Array.', () => {
    const array = [{ key: 'value' }];

    expect(deleteItem(array, { key: 'value' }).length).toBe(array.length);
  });

  test('Mixing Array.', () => {
    const array = [1, '2', '3'];

    expect(shallowCompare(deleteItem(array, '2'), [1, '3'])).toBeTruthy();
    expect(shallowCompare(array, [1, '2', '3'])).toBeTruthy();
  });
});

describe('Delete items where value is strict equal.', () => {
  test('Number Array', () => {
    const array = [1, 9, 9, 6];

    expect(shallowCompare(deleteItems(array, 9), [1, 6])).toBeTruthy();
    expect(shallowCompare(array, [1, 9, 9, 6])).toBeTruthy();
  });

  test('Object Array', () => {
    const array = [{}, { key: 'value' }];

    expect(deleteItems(array, {}).length).toBe(array.length);
  });

  test('Mixing Array', () => {
    const array = [1, '9', 9, 6];

    expect(shallowCompare(deleteItems(array, 9), [1, '9', 6])).toBeTruthy();
    expect(shallowCompare(array, [1, '9', 9, 6])).toBeTruthy();
  });
});

describe('Delete items expect value equal another Array.', () => {
  test('Number Array.', () => {
    const array = [1, 9, 9, 6];

    expect(shallowCompare(deleteItemsExcept(array, [1, 2, 3]), [1])).toBeTruthy();
    expect(shallowCompare(deleteItemsExcept(array, [1, 9, 3]), [1, 9, 9])).toBeTruthy();
    expect(shallowCompare(deleteItemsExcept(array, [1, 9, 6]), [1, 9, 9, 6])).toBeTruthy();
  });

  test('Mixing Array.', () => {
    const array = [1, '9', 9, 6];

    expect(shallowCompare(deleteItemsExcept(array, [1, 2, 3]), [1])).toBeTruthy();
    expect(shallowCompare(deleteItemsExcept(array, [1, 9, 3]), [1, 9])).toBeTruthy();
    expect(shallowCompare(deleteItemsExcept(array, [1, 9, 6]), [1, 9, 6])).toBeTruthy();
    expect(shallowCompare(deleteItemsExcept(array, [1, '9', 9, 6]), [1, '9', 9, 6])).toBeTruthy();
  });
});

describe('Map Array.', () => {
  const plusOne = (value) => 1 + value;

  test('Number Array.', () => {
    const array = [1, 9, 9, 6];

    expect(shallowCompare(map(plusOne)(array), [2, 10, 10, 7])).toBeTruthy();
  });

  test('Mixing Array.', () => {
    const array = [1, '9', 9, 6];

    expect(shallowCompare(map(plusOne)(array), [2, '19', 10, 7])).toBeTruthy();
  });
});

test('Remove Duplicates.', () => {
  const nums = [1, 9, 9, 6, 0, 7, 1, 1];
  const objects = [
    {
      key: 'value'
    },
    {
      key: 'val'
    },
    {
      key: 'value'
    },
    {
      child: {
        key: 'value'
      }
    }
  ];

  expect(deepCompare(removeDuplicates(nums), [1, 9, 6, 0, 7])).toBeTruthy();
  expect(deepCompare(
    removeDuplicates(objects, 'key'),
    [
      { key: 'value' },
      { key: 'val' },
      { child: { key: 'value' } },
    ]
  )).toBeTruthy();
});
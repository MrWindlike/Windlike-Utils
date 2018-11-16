import object from '../index';
const { shallowCompare, deepCompare, has, get } = object;

describe('Shallow compare.', () => {
  test('Equal.', () => {
    const obj = {
      key: 'value',
      a: 1,
      b: 2
    };
    const anotherObj = {
      a: 1,
      key: 'value',
      b: 2
    };

    expect(shallowCompare(obj, anotherObj)).toBeTruthy();
  });

  test('Not Equal.', () => {
    const obj = {
      key: 'value',
      a: 1,
      b: 2
    };

    expect(shallowCompare(obj, {
      a: 1,
      b: 2,
      child: {}
    })).toBeFalsy();
    expect(shallowCompare(obj, {
      a: 1,
      b: 2,
      child: {}
    })).toBeFalsy();
  });
});

describe('Is two object\'s values equal?', () => {
  test('Yes.', () => {
    expect(
      deepCompare(
        {
          a: 1,
          b: 2
        },
        {
          b: 2,
          a: 1
        }
      )
    ).toBeTruthy();
    expect(
      deepCompare(
        {
          a: 1,
          child: {
            key: 'value'
          },
          b: 2,
          obj: {},
          none: null
        },
        {
          b: 2,
          obj: {},
          none: null,
          a: 1,
          child: {
            key: 'value'
          }
        }
      )
    ).toBeTruthy();
  });

  test('No.', () => {
    expect(
      deepCompare(
        {
          a: 1,
          b: 2
        },
        {
          a: 1,
          b: '2'
        }
      )
    ).toBeFalsy();

    expect(
      deepCompare(
        {
          a: 1,
          b: 2,
          child: {}
        },
        {
          b: 2,
          a: 1,
          child: {
            key: 'value'
          }
        }
      )
    ).toBeFalsy();
  });
});

describe('Is object has this key?', () => {
  const object = { key: 'value', nonexistent: undefined };

  test('Yes.', () => {
    const result = has(object, 'key');

    expect(result).toBeTruthy();
  });

  test('Yes.', () => {
    const result = has(object, 'nonexistent');

    expect(result).toBeFalsy();
  });
});

test('Get Object\'s Value.', () => {
  const obj = {
    key: 'value',
    object: {
      key: 'object',
      child: {
        key: 'child'
      }
    }
  };

  expect(deepCompare(get(obj), {
    key: 'value',
    object: {
      key: 'object',
      child: {
        key: 'child'
      }
    }
  })).toBeTruthy();
  expect(get(obj, 'key')).toBe('value');
  expect(get(obj, 'object.key')).toBe('object');
  expect(get(obj, 'object.child.key')).toBe('child');
  expect(get(obj, 'object.child.one')).toBe(null);
  expect(get(obj, 'any.object.child')).toBe(null);
});

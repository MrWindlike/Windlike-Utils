import object from '../index';
const { shallowCompare, deepCompare, has } = object;

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

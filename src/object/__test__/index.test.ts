import object from '../index';
const {
  valueEqual,
  has
} = object;

describe('Is two object\'s values equal?', () => {
  test('Yes.', () => {
    expect(valueEqual(
      {
        a: 1,
        b: 2,
      },
      {
        b: 2,
        a: 1,
      },
    )).toBeTruthy();
    expect(valueEqual(
      {
        a: 1,
        child: {
          key: 'value'
        },
        b: 2,
        obj: {},
      },
      {
        b: 2,
        obj: {},
        a: 1,
        child: {
          key: 'value'
        },
      },
    )).toBeTruthy();
  });

  test('No.', () => {
    expect(
      valueEqual(
        {
          a: 1,
          b: 2,
        },
        {
          a: 1,
          b: '2',
        }
      )
    ).toBeFalsy();

    expect(
      valueEqual(
        {
          a: 1,
          b: 2,
          child: {},
        },
        {
          b: 2,
          a: 1,
          child: {
            key: 'value'
          },
        }
      )
    ).toBeFalsy();
  });
});

describe('Is object has this key?', () => {
  const object = { key: 'value' };

  test('Yes.', () => {
    const result = has(object, 'key');

    expect(result).toBeTruthy();
  });

  test('Yes.', () => {
    const result = has(object, 'windlike');

    expect(result).toBeFalsy();
  });
});

import object from '../index';
const {
  valueEqual,
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
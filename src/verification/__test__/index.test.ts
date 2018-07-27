import verification from '../index';
const {
  check,
  checkLength,
  checkRe,
} = verification;

test('Check RegExp.', () => {
  const checkFunction = checkRe(/<[\s\S]*?(script)[\s\S]*?>/);

  expect(checkFunction('<script></script>')).toBeTruthy();
  expect(checkFunction('<script src="src/script.js"></script>')).toBeTruthy();
  expect(checkFunction('<script src="src/script.js"/>')).toBeTruthy();
  expect(checkFunction('<div/>')).toBeFalsy();
});

test('Check string\'s length.', () => {
  const checkLengthFunction = checkLength(1, 5);

  expect(checkLengthFunction('windlike')).toBeFalsy();
  expect(checkLengthFunction('wind')).toBeTruthy();
});

describe('Check common type.', () => {
  test('Phone.', () => {
    const checkPhone = check('phone');

    expect(checkPhone('13800000000')).toBeTruthy();
    expect(checkPhone('12345678909')).toBeFalsy();
  });

  test('Phone.', () => {
    const checkEmail = check('email');

    expect(checkEmail('windlike@windlike.com')).toBeTruthy();
    expect(checkEmail('windlike.com')).toBeFalsy();
  });
});
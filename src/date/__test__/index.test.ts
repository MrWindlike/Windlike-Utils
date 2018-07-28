import date from '../index';
const {
  formatDate,
} = date;

describe('Format date.', () => {
  const ms = 837043200000;  // 1996-07-11 08:00:00

  test('YYYY-MM-DD.', () => {
    expect(formatDate('YYYY-MM-DD')(ms)).toBe('1996-07-11');
  });

  test('YYYY-MM-DD hh:mm:ss.', () => {
    expect(formatDate('YYYY-MM-DD hh:mm:ss')(ms)).toBe('1996-07-11 08:00:00');
  });

  test('YYYY-MM-DD hh:mm:ss WW.', () => {
    expect(formatDate('YYYY-MM-DD hh:mm:ss WW')(ms)).toBe('1996-07-11 08:00:00 星期四');
  });
});
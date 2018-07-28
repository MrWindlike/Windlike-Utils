import date from '../index';
const {
  createFormatDate,
} = date;

describe('Format date.', () => {
  const ms = 837043200000;  // 1996-07-11 08:00:00

  test('YYYY-MM-DD.', () => {
    expect(createFormatDate('YYYY-MM-DD')(ms)).toBe('1996-07-11');
  });

  test('YYYY-MM-DD hh:mm:ss w.', () => {
    expect(createFormatDate('YYYY-MM-DD hh:mm:ss w')(ms)).toBe('1996-07-11 08:00:00 Thur.');
  });

  test('YYYY-MM-DD hh:mm:ss W.', () => {
    expect(createFormatDate('YY-MM-DD hh:mm:ss W')(ms)).toBe('96-07-11 08:00:00 星期四');
  });
});
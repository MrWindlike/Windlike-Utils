import string from '../index';
import array from '../../array/index';
const {
  replace,
  split,
  match,
} = string;

test('Replace string.', () => {
  const str = 'I\'m Windlike.';
  const replaceWindlike = replace('Windlike');

  expect(replaceWindlike(str, 'I')).toBe('I\'m I.');
  expect(replaceWindlike(str, 'Wind')).toBe('I\'m Wind.');
});

test('Split string.', () => {
  const str = 'I And You';
  const splitStr = split(' ');
  const result = splitStr(str);

  expect(result[0]).toBe('I');
  expect(result[1]).toBe('And');
  expect(result[2]).toBe('You');
});

test('Match string.', () => {
  const re = /[\w]+/g;
  const str = 'I am a string.';
  const matchWork = match(re);
  const result = matchWork(str);

  expect(array.equal(result, ['I', 'am', 'a', 'string'])).toBeTruthy();

});


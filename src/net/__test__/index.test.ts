import net from '../index';
import object from '../../object/index';
const {
  parseUrl,
  parseParams,
} = net;

test('Parse URL', () => {
  const URL = 'https://github.com/MrWindlike/Windlike-Utils?key=value';
  const result = parseUrl(URL);

  expect(
    object.deepCompare(
      result,
      {
        url: URL,
        host: 'https://github.com',
        port: 80,
        path: '/MrWindlike/Windlike-Utils',
        params: {
          key: 'value',
        },
      }
    )
  ).toBeTruthy();
});

test('Parse params.', () => {
  const SEARCH = '?key=value&search=windlike';
  const result = parseParams(SEARCH);

  expect(
    object.deepCompare(
      result,
      {
        key: 'value',
        search: 'windlike',
      },
    )
  ).toBeTruthy();
});

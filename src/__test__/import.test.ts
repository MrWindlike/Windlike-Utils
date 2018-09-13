import utils from '../../dist/utils';
import { shallowCompare } from '../../dist/object';

test('Import utils.', () => {
  expect(utils).not.toBeUndefined();
  expect(shallowCompare).not.toBeUndefined();
});

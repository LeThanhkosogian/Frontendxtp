// ARRAY-CD-06: Xoá các số trùng nhau nhưng giữ lại một số
// Viết hàm uniqueArray(numberList) để xoá các số xuần hiện hơn 1 lần, nhưng giữ lại 1 số.

import { uniqueArray } from './ARRAY-06-CD';

describe('uniqueArray(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(uniqueArray('string')).toBe('wrong type');
  });
  test('should return array', () => {
    expect(uniqueArray([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
    expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(uniqueArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(
      [1]
    );
  });
});

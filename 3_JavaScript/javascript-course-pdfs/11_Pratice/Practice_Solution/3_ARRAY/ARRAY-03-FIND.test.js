// ARRAY-FIND-03: Tìm số dương chẵn đầu tiên trong mảng
// Viết hàm findFirstPositiveEven(numberList) để tìm ra số dương chẵn đầu tiên trong mảng numberListimport { findFirstPositiveEven } from './ARRAY-02-FIND';

import { findFirstPositiveEven } from './ARRAY-03-FIND';

describe('findFirstPositiveEven(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findFirstPositiveEven('string')).toBe('wrong type');
  });
  test('should return the First positive even number', () => {
    expect(findFirstPositiveEven([])).toBe(undefined);
    expect(findFirstPositiveEven([1, 4, 5])).toBe(4);
    expect(findFirstPositiveEven([1, 3, 5])).toBe(undefined);
  });
});

// ARRAY-FIND-01: Tìm số dương nhỏ nhất trong mảng
// Viết hàm findMinPositive(numberList) để tìm ra số dương nhỏ nhất trong mảng

import { findMinPositive } from './ARRAY-01-FIND';

describe('findMinPositive(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findMinPositive('string')).toBe('wrong type');
  });
  test('should return theMinPositiveNumber', () => {
    expect(findMinPositive([])).toBe(undefined);
    expect(findMinPositive([12, 89, 2, 0, -12])).toBe(2);
    expect(findMinPositive([44, 4631, -4631, 7, 45])).toBe(7);
    expect(findMinPositive([-44, -4631, -45])).toBe(undefined);
  });
});

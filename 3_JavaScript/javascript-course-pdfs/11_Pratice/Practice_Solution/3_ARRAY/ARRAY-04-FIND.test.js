// ARRAY-FIND-04: Tìm số âm lẻ cuối cùng trong mảng
// Viết hàm findLastNegativeOdd(numberList) để tìm ra số âm lẻ cuối cùng trong mảng numberList

import { findLastNegativeOdd } from './ARRAY-04-FIND';

describe('findLastNegativeOdd(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findLastNegativeOdd('string')).toBe('wrong type');
  });
  test('should return the First positive even number', () => {
    expect(findLastNegativeOdd([])).toBe(undefined);
    expect(findLastNegativeOdd([1, -5, 0])).toBe(-5);
    expect(findLastNegativeOdd([1, 3, 5])).toBe(undefined);
  });
});

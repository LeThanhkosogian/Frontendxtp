// ARRAY-FIND-06: Tìm số chính phương cuối cùng trong mảng
// Viết hàm findLastPerfectSquare(numberList) để tìm ra số chính phương cuối cùng trong mảng
// numberList

import { findLastPerfectSquare } from './ARRAY-06-FIND';

describe('findLastPerfectSquare(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findLastPerfectSquare('string')).toBe('wrong type');
  });
  test('should return the last perfect square number', () => {
    expect(findLastPerfectSquare([])).toBe(undefined);
    expect(findLastPerfectSquare([1])).toBe(1);
    expect(findLastPerfectSquare([0, 4, 1, 0])).toBe(1);
    expect(findLastPerfectSquare([1, 3, 4, 7])).toBe(4);
    expect(findLastPerfectSquare([1, 5, 5, 9])).toBe(9);
  });
});

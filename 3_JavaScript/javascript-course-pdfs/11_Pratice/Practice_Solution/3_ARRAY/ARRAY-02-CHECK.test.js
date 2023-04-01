// ARRAY-CHECK-02: Kiểm tra có số lẻ và chia hết cho 3 không
// Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào
// chia hết cho 3 không?

import { hasOddNumberDivisibleBy3 } from './ARRAY-02-CHECK';

describe('hasOddNumberDivisibleBy3(array)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasOddNumberDivisibleBy3('string')).toBe('wrong type');
  });
  test('should return true if array has OddNumberDivisibleBy3 or not return false', () => {
    expect(hasOddNumberDivisibleBy3([12, 8, 3, 9, 11])).toBe(true);
    expect(hasOddNumberDivisibleBy3([12, 89, 2, 0, -12])).toBe(false);
    expect(hasOddNumberDivisibleBy3([44, 4631, -4631, 7, 45])).toBe(true);
  });
});

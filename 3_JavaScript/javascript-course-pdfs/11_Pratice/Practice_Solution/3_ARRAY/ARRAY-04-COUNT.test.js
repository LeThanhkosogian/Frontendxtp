// ARRAY-COUNT-04: Ðếm số lượng các số khác nhau có trong mảng
// Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng

import { countUniqueNumbers } from './ARRAY-04-COUNT';

describe('countUniqueNumbers(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(countUniqueNumbers('string')).toBe('wrong type');
  });
  test('should return count', () => {
    expect(countUniqueNumbers([])).toBe(0);
    expect(countUniqueNumbers([1, 1, 1])).toBe(1);
    expect(countUniqueNumbers([1, 2, 2, 3, 1])).toBe(3);
  });
});

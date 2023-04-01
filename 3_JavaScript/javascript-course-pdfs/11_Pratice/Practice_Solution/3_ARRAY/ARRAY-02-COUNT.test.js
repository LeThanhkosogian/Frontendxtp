// ARRAY-COUNT-02: Ðếm số mà nó nhỏ hơn số liền trước của nó
// Viết hàm countNumbers(numberList) để đếm xem trong mảng có bao nhiêu số mà nó nhỏ hơn số đừng
// liền trước của nó.

import { countNumbers } from './ARRAY-02-COUNT';

describe('countNumbers(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(countNumbers('string')).toBe('wrong type');
  });
  test('should return count', () => {
    expect(countNumbers([12, 8, 3, 9, 11])).toBe(2);
    expect(countNumbers([12, 89, 3, 0, -12])).toBe(3);
    expect(countNumbers([44, 4631, -4631, 7, 45])).toBe(1);
  });
});

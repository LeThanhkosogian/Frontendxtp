// ARRAY-SUM-01: Tổng các số chẳn mà nó lớn hơn số trước đó.
// Viết hàm sumEvenNumbers(numberList) để tính tổng các số chẵn có giá trị lớn hơn số liền kế trước đó.

import { sumEvenNumbers } from './ARRAY-01-SUM';

describe('sumEvenNumbers(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(sumEvenNumbers('string')).toBe('wrong type');
  });
  test('should return sum', () => {
    expect(sumEvenNumbers([-10, -4, 2, 8, 5])).toBe(6);
    expect(sumEvenNumbers([2, 8, 5, 4])).toBe(8);
  });
});

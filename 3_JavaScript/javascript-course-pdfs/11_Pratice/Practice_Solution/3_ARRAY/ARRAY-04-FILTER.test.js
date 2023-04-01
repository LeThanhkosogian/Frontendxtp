// ARRAY-FILTER-04: Dãy số nguyên tố nhỏ hơn n
// Viết hàm generatePrimeNumbers(n) để tạo ra mảng các số nguyên tố nhỏ hơn n (0 < n < 1000)

import { generatePrimeNumbers } from './ARRAY-04-FILTER';

describe('generatePrimeNumbers(n)', () => {
  test('should return wrong type if parameter is not number', () => {
    expect(generatePrimeNumbers('string')).toBe('wrong type');
  });
  test('should return prime number array lower than n', () => {
    expect(generatePrimeNumbers(1)).toEqual([]);
    expect(generatePrimeNumbers(2)).toEqual([]);
    expect(generatePrimeNumbers(5)).toEqual([2, 3]);
    expect(generatePrimeNumbers(10)).toEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});

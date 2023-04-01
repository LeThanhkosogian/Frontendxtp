// ARRAY-COUNT-01: Ðếm số dương chẵn có trong mảng
// Viết hàm countPositiveEvenNumbers(numberList) để đếm có bao nhiêu số dương chẳn có trong mảng.

import { countPositiveEvenNumbers } from './ARRAY-01-COUNT';

describe('countPositiveEvenNumbers(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(countPositiveEvenNumbers('string')).toBe('wrong type');
  });
  test('should return count of PositiveEvenNumbers ', () => {
    expect(countPositiveEvenNumbers([12, 8, 3, 9, 11])).toBe(2);
    expect(countPositiveEvenNumbers([12, 89, 3, 0, -12])).toBe(1);
    expect(countPositiveEvenNumbers([44, 4631, -4631, 7, 45])).toBe(1);
  });
});

// ARRAY-FILTER-01: Liệt kê các số trong khoảng [a, b]
// Viết hàm generateNumberInRange(a, b) để tạo ra một mảng các số từ a đến b (có bao gồm a và b)

import { generateNumberInRange } from './ARRAY-01-FILTER';

describe('generateNumberInRange(a, b)', () => {
  test('should return wrong type if parameter is not number', () => {
    expect(generateNumberInRange('string', 12)).toBe('wrong type');
  });
  test('should return array contains numbers from a to b', () => {
    expect(generateNumberInRange(7, 5)).toEqual([]);
    expect(generateNumberInRange(-5, 5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
    expect(generateNumberInRange(5, 5)).toEqual([5]);
  });
});

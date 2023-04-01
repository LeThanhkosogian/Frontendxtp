// ARRAY-SUM-02: Tổng của các chữ số trong mảng
// Viết hàm sumAllDigits(numberList) để tính tổng các chữ số của từng số trong mảng numberList

import { sumAllDigits } from './ARRAY-02-SUM';

describe('sumAllDigits(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(sumAllDigits('string')).toBe('wrong type');
  });
  test('should return sum', () => {
    expect(sumAllDigits([])).toBe(0);
    expect(sumAllDigits([4])).toBe(4);
    expect(sumAllDigits([123, 4])).toBe(10);
    expect(sumAllDigits([1234, 55])).toBe(20);
  });
});

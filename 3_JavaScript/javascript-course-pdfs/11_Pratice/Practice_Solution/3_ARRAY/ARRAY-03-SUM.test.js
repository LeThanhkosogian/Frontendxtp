// ARRAY-SUM-03: Tổng các chữ số nhỏ nhất của số trong mảng
// Viết hàm sumAllMinDigits(numberList) để tính tổng các chữ số nhỏ nhất của từng số trong mảng
// numberList

import { sumAllMinDigits } from './ARRAY-03-SUM';

describe('sumAllMinDigits(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(sumAllMinDigits('string')).toBe('wrong type');
  });
  test('should return sum', () => {
    expect(sumAllMinDigits([])).toBe(0);
    expect(sumAllMinDigits([4])).toBe(4);
    expect(sumAllMinDigits([123, 4])).toBe(5);
    expect(sumAllMinDigits([1234, 532])).toBe(3);
  });
});

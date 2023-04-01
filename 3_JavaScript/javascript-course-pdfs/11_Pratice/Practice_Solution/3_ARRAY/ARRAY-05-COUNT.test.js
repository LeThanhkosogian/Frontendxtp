// ARRAY-COUNT-05: Ðếm số lượng các số có trong mảng a mà không có trong mảng b
// Viết hàm countNumbersNotInB(a, b) để đếm có bao nhiếu số xuất hiện trong mảng a, mà không có trong
// mảng b

import { countNumbersNotInB } from './ARRAY-05-COUNT';

describe('countNumbersNotInB(numberListA, numberListB )', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(countNumbersNotInB('string')).toBe('wrong type');
  });
  test('should return count', () => {
    expect(countNumbersNotInB([1, 2, 3], [4, 5])).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});

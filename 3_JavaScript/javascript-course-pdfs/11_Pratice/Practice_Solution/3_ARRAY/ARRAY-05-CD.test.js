// ARRAY-CD-05: Xoá các số trùng nhau trong mảng
// Viết hàm removeDuplicatedNumbers(numberList) để xoá tất cả các số xuất hiện hơn 1 lần.

import { removeDuplicatedNumbers } from './ARRAY-05-CD';

describe('removeDuplicatedNumbers(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(removeDuplicatedNumbers('string')).toBe('wrong type');
  });
  test('should return array', () => {
    expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toEqual([3]);
    expect(removeDuplicatedNumbers([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicatedNumbers([])).toEqual([]);
  });
});

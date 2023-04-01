// ARRAY-FIND-05: Tìm số lớn thứ 2 trong mảng
// Viết hàm findSecondLargestNumber(numberList) để tìm ra số lớn thứ 2 trong mảng numberList

import { findSecondLargestNumber } from './ARRAY-05-FIND';

describe('findSecondLargestNumber(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findSecondLargestNumber('string')).toBe('wrong type');
  });
  test('should return the second largest number', () => {
    expect(findSecondLargestNumber([])).toBe(undefined);
    expect(findSecondLargestNumber([1])).toBe(undefined);
    expect(findSecondLargestNumber([1, 1, 1, 1])).toBe(undefined);
    expect(findSecondLargestNumber([1, 3, 5, 7])).toBe(5);
    expect(findSecondLargestNumber([1, 5, 5, 5])).toBe(1);
  });
});

// ARRAY-CD-01: Thêm một phần tử tại vị trí k
// Viết hàm findAllIncreasingSubArr(arr, newItem, k) để thêm một phần tử mới newItem vào vị trí k (zero based) của mảng arr
// Nếu k lớn hơn độ dài của mảng thì thêm vào cuối mảng
// Nếu k bé hơn hoặc bằng 0 thì thêm vào đàu mảng

import { findAllIncreasingSubArr } from './ARRAY-01-SUBARR';

describe('findAllIncreasingSubArr(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findAllIncreasingSubArr('string')).toBe('wrong type');
  });
  test('should return array', () => {
    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);
    expect(findAllIncreasingSubArr([-1, 1, 2, 3, -5, -10, 5, 10])).toEqual([
      [-1, 1, 2, 3],
      [-10, 5, 10],
    ]);
    expect(findAllIncreasingSubArr([4, 2, 1])).toEqual([]);
  });
});

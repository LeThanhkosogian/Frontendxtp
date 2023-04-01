// ARRAY-CD-01: Thêm một phần tử tại vị trí k
// Viết hàm insert(arr, newItem, k) để thêm một phần tử mới newItem vào vị trí k (zero based) của mảng arr
// Nếu k lớn hơn độ dài của mảng thì thêm vào cuối mảng
// Nếu k bé hơn hoặc bằng 0 thì thêm vào đàu mảng

import { insert } from './ARRAY-01-CD';

describe('insert(arr, newItem, k)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(insert('string')).toBe('wrong type');
  });
  test('should return sum', () => {
    expect(insert([1, 2, 3], 0, -1)).toEqual([0, 1, 2, 3]);
    expect(insert([1, 2, 3], 4, 10)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 10, 2)).toEqual([1, 2, 10, 3]);
  });
});

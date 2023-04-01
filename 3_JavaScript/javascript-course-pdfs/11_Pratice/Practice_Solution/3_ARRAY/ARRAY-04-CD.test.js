// ARRAY-CD-04: Cho một mảng đã được sắp xếp tăng dần. Cho một số, nhờ bạn add vào mảng
// nhưng phải đảm bảo mảng vẫn đc sắp xếp tăng dần.
// Viết hàm insert(numberList, newNumber) để chèn newNumber vào mảng numberList sao cho mảng kết
// quả vẫn là tăng dần.

import { insert } from './ARRAY-04-CD';

describe('insert(numberList, newNumber)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(insert('string')).toBe('wrong type');
  });
  test('should return sum', () => {
    expect(insert([], 3)).toEqual([3]);
    expect(insert([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
  });
});

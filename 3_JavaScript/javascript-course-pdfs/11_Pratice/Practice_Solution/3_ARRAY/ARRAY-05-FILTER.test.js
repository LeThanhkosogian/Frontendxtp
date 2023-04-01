// ARRAY-FILTER-05: Tìm tất cả các số bằng với số dương chẳn đầu tiên trong mảng
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số bằng với số dương chẳn đầu tiên trong
// mảng.
// Trường hợp mảng không có số dương chẳn thì trả về mảng rỗng.
// Mảng kết quả không bao gồm số dương chẵn đầu tiên.

import { findAllNumbers } from './ARRAY-05-FILTER';

describe('findAllNumbers(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findAllNumbers('string')).toBe('wrong type');
  });
  test('should return required array', () => {
    expect(findAllNumbers([1, 3, 5])).toEqual([]);
    expect(findAllNumbers([1, 2, 5])).toEqual([]);
    expect(findAllNumbers([1, 4, 5, -6, 4, 5, 4])).toEqual([4, 4]);
  });
});

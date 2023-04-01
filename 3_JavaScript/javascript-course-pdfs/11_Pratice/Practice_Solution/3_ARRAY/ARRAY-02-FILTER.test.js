// ARRAY-FILTER-02: Tìm tất cả các số mà nó lớn hơn số đứng trước nó
// Viết hàm findNumbers(numberList) để tìm ra các số thoả điều kiện là lớn hơn số đứng trước nó (không
// tính số đầu tiên)

import { findNumbers } from './ARRAY-02-FILTER';

describe('findNumbers(numberList)', () => {
  test('should return wrong type if parameter is not number', () => {
    expect(findNumbers('string')).toBe('wrong type');
  });
  test('should return required array', () => {
    expect(findNumbers([1])).toEqual([]);
    expect(findNumbers([2, 1, -5, -8])).toEqual([]);
    expect(findNumbers([1, 5, 4, 8, 9])).toEqual([5, 8, 9]);
  });
});

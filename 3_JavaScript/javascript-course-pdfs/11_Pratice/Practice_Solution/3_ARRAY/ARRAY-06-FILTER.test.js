// ARRAY-FILTER-06: Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ.

import { findAllNumbers } from './ARRAY-06-FILTER';

describe('findAllNumbers(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findAllNumbers('string')).toBe('wrong type');
  });
  test('should return required array', () => {
    expect(findAllNumbers([0, 2, 6])).toEqual([]);
    expect(findAllNumbers([1, 2, 5])).toEqual([1, 5]);
    expect(findAllNumbers([-234, -512, 123])).toEqual([-512, 123]);
  });
});

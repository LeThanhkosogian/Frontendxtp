// ARRAY-CHECK-11: Kiểm tra mang có đối xứng không
// Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
// Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
// Mảng đối xứng phải có ít nhất một phần tử.

import { isSymmetricList } from './ARRAY-11-CHECK';

describe('isSymmetricList(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(isSymmetricList('string')).toBe('wrong type');
  });
  test('should return true if it is increasingNumberList', () => {
    expect(isSymmetricList([5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5])).toBe(true);
    expect(isSymmetricList([2, 1, 0, 0, 1, 2])).toBe(true);
    expect(isSymmetricList([5])).toBe(true);
    expect(isSymmetricList([5, 5])).toBe(true);
    expect(isSymmetricList([15, -10, -15, 5])).toBe(false);
    expect(isSymmetricList([20, 15, 10, 5, 5])).toBe(false);
  });
});

// ARRAY-CHECK-10: Kiểm tra mảng có giảm dần không
// Viết hàm isDecreasingNumberList(numberList) để kiểm tra xem mảng số này có phải giảm dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// . Có ít nhất 2 phần tử.
// . Phần tử sau luôn nhỏ hơn phần tử trước nó.

import { isDecreasingNumberList } from './ARRAY-10-CHECK';

describe('isDecreasingNumberList(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(isDecreasingNumberList(1)).toBe('wrong type');
  });
  test('should return true if it is DecreasingNumberList', () => {
    expect(isDecreasingNumberList([5, 4, 3, 2, 1, 0, -1])).toBe(true);
    expect(isDecreasingNumberList([20, 15, 10, 5, -5])).toBe(true);
    expect(isDecreasingNumberList([15, -10, -15, 5])).toBe(false);
    expect(isDecreasingNumberList([20, 15, 10, 5, 5])).toBe(false);
  });
});

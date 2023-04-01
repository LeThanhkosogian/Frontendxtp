// ARRAY-CHECK-09: Kiểm tra mảng có tăng dần không
// Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không?
// Mảng tăng dần cần thoả các điều kiện sau:
// . Có ít nhất 2 phần tử.
// . Phần tử sau luôn lớn hơn phần tử trước nó.

import { isIncreasingNumberList } from './ARRAY-09-CHECK';

describe('isIncreasingNumberList(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(isIncreasingNumberList(1)).toBe('wrong type');
  });
  test('should return true if it is increasingNumberList', () => {
    expect(isIncreasingNumberList([-1, 0, 1, 2, 3, 4, 5])).toBe(true);
    expect(isIncreasingNumberList([-5, 0, 5, 10, 15])).toBe(true);
    expect(isIncreasingNumberList([-5, -10, 5, 10, 15])).toBe(false);
    expect(isIncreasingNumberList([-5, -5, 5, 10, 15])).toBe(false);
  });
});

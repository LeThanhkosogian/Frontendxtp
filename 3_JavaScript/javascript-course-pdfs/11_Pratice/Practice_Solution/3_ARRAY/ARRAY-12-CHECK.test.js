// ARRAY-FIND-11: Tìm student có điểm môn toán lớn nhất đầu tiên
// Viết hàm hasFibonacciNumber(studentList) để tìm ra student để điểm môn toán cao nhất.

import { hasFibonacciNumber } from './ARRAY-12-CHECK';

describe('hasFibonacciNumber(numberList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasFibonacciNumber('string')).toBe('wrong type');
  });
  test('should return the first highest score student', () => {
    expect(hasFibonacciNumber([4, 6, 7])).toBe(false);
    expect(hasFibonacciNumber([0, 1, 2, 3, 4, 5])).toBe(true);
    expect(hasFibonacciNumber([89])).toBe(true);
  });
});

// ARRAY-FILTER-03: Dãy số fibonaci nhỏ hơn n
// Viết hàm generateFibonacci(n) để tạo ra mảng các số fibonaci nhỏ hơn n (0 < n < 1000)
// Fibonaci là dãy số tự nhiên có 2 phần tử đầu tiên là 0 và 1.
// Phân tử tiếp theo sẽ bằng tổng 2 phần tử trước đó:
// f(n) = f(n - 1) + f(n - 2)

import { generateFibonacci } from './ARRAY-03-FILTER';

describe('generateFibonacci(n)', () => {
  test('should return wrong type if parameter is not number', () => {
    expect(generateFibonacci('string')).toBe('wrong type');
  });
  test('should return fibonacci number array lower than n', () => {
    expect(generateFibonacci(0)).toEqual([]);
    expect(generateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(generateFibonacci(13)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});

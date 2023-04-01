// ARRAY-CHECK-04: Kiểm tra có giá trị truthy nào trong mảng không
// Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không?

import { hasTruthy } from './ARRAY-04-CHECK';

describe('hasTruthy(arr)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasTruthy('string')).toBe('wrong type');
  });
  test('should return true if arr has truthy value or not return false', () => {
    expect(hasTruthy([false])).toBe(false);
    expect(hasTruthy([0])).toBe(false);
    expect(hasTruthy([-0])).toBe(false);
    expect(hasTruthy([0n])).toBe(false);
    expect(hasTruthy([''])).toBe(false);
    expect(hasTruthy([``])).toBe(false);
    expect(hasTruthy([null])).toBe(false);
    expect(hasTruthy([undefined])).toBe(false);
    expect(hasTruthy([NaN])).toBe(false);
    expect(hasTruthy([false, 21])).toBe(true);
    expect(hasTruthy([false, 'LeThanh'])).toBe(true);
  });
});

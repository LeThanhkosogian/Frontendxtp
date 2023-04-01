// ARRAY-CHECK-05: Kiểm tra có giá trị falsy nào trong mảng không
// Viết hàm hasFalsy(arr) để kiểm tra xem trong mảng arr có giá trị falsy không?

import { hasFalsy } from './ARRAY-05-CHECK';

describe('hasFalsy(arr)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasFalsy('string')).toBe('wrong type');
  });
  test('should return true if arr has truthy value or not return false', () => {
    expect(hasFalsy([false])).toBe(true);
    expect(hasFalsy([0])).toBe(true);
    expect(hasFalsy([-0])).toBe(true);
    expect(hasFalsy([0n])).toBe(true);
    expect(hasFalsy([''])).toBe(true);
    expect(hasFalsy([``])).toBe(true);
    expect(hasFalsy([null])).toBe(true);
    expect(hasFalsy([undefined])).toBe(true);
    expect(hasFalsy([NaN])).toBe(true);
    expect(hasFalsy([false, 21])).toBe(true);
    expect(hasFalsy([false, 'LeThanh'])).toBe(true);
    expect(hasFalsy([true, 'LeThanh'])).toBe(false);
  });
});

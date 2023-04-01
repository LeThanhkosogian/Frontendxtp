// ARRAY-CHECK-01: Kiểm tra có số chẵn lớn hơn n trong mảng không
// Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
// vào có số chẵn mà lớn hơn n hay không?

import { hasEvenNumberGreaterThanN } from './ARRAY-01-CHECK';

describe('hasEvenNumberGreaterThanN(array, n)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasEvenNumberGreaterThanN('string', 12)).toBe('wrong type');
    expect(hasEvenNumberGreaterThanN([12, 4], 'string')).toBe('wrong type');
  });
  test('should return true if array has EvenNumGreaterThanN or return false', () => {
    expect(hasEvenNumberGreaterThanN([12, 8, 3, 9, 11], 9)).toBe(true);
    expect(hasEvenNumberGreaterThanN([12, 89, 3, 0, -12], 12)).toBe(false);
    expect(hasEvenNumberGreaterThanN([44, 4631, -4631, 7, 45], 33)).toBe(true);
  });
});

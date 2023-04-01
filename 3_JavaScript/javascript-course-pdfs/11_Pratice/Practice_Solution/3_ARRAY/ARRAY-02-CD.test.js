// ARRAY-CD-02: Xoá một phần tử tại vị trí k
// Viết hàm remove(arr, k, n) để xoá n phần tử ra khỏi mảng arr kể từ vị trị k (zero based)
// Nếu k < 0 hoặc k >= arr.length thì trả về mảng hiện tại.
// Nếu k hợp lệ thì remove n phần tử kể tử vị trí k và trả về mảng kết quả.
// Nếu n không truyền vào thì remove tới cuối mảng.
// Lưu ý không được làm thay đổi mảng arr truyền vào.

import { remove } from './ARRAY-02-CD';

describe('remove(arr, k, n)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(remove('string')).toBe('wrong type');
  });
  test('should return sum', () => {
    expect(remove([1, 2, 3], -1, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3, 4, 5, 6], 1, 2)).toEqual([1, 4, 5, 6]);
    expect(remove([1, 2, 3], 0)).toEqual([]);
  });
});

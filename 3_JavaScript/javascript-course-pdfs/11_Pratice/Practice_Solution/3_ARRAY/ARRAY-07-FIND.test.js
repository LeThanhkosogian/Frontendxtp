// ARRAY-FIND-07: Tìm email đầu tiên trong mảng
// Viết hàm findFirstEmail(strList) để tìm ra email hợp lệ đầu tiên có trong mảng strList
// Ðiều kiện của một email hợp lệ:
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trường hợp không tìm thấy email thoả yêu cầu thì trả về undefined.

import { findFirstEmail } from './ARRAY-07-FIND';

describe('findFirstEmail(strList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findFirstEmail('string')).toBe('wrong type');
  });
  test('should return the first email', () => {
    expect(findFirstEmail([])).toBe(undefined);
    expect(findFirstEmail(['lethanh@gmail.com', 'abc@.com', '@'])).toBe('lethanh@gmail.com');
    expect(findFirstEmail(['lethanh@gmail.com', 'abc@.vn', '@'])).toBe('lethanh@gmail.com');
    expect(findFirstEmail(['@gmail.com', 'abc@gmail.com', '@'])).toBe('abc@gmail.com');
    expect(findFirstEmail(['@gmail.com', 'abc@gmail.com.vn', '@'])).toBe('abc@gmail.com.vn');
    expect(findFirstEmail(['', 'abc@.com', '@'])).toBe(undefined);
  });
});

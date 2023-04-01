// STRING-04: Ðếm số lượng email có trong câu
// Viết hàm countEmails(str) để đếm số lượng email có trong str
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trả về số lượng email tìm thấy từ chuỗi truyền vào.

import { countEmailsV1 } from './STRING-04';

describe('countEmailsV1(String)', () => {
  test('should return false if type is not String', () => {
    expect(countEmailsV1(parseInt(56443))).toBe(false);
  });
  test('should return count of email exist in String', () => {
    expect(countEmailsV1('my email should be abc@super.com')).toBe(1);
    expect(countEmailsV1('my email should be a@a.com')).toBe(0);
    expect(countEmailsV1('my email should be @ bla .com')).toBe(0);
    expect(countEmailsV1('my email is lethanh210603@gmail.com.vn')).toBe(1);
    expect(
      countEmailsV1(
        'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn'
      )
    ).toBe(3);
  });
});

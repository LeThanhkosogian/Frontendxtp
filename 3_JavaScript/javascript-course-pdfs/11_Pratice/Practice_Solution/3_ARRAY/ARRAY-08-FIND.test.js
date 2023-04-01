// ARRAY-FIND-08: Tìm url cuối cùng trong mảng
// Viết hàm findLastUrl(strList) để tìm ra URL cuối cùng có trong mảng strList
// Ðiều kiện cho một URL hợp lệ:
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
import { findLastUrl } from './ARRAY-08-FIND';

describe('findLastUrl(strList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findLastUrl('string')).toBe('wrong type');
  });
  test('should return the last URL', () => {
    expect(findLastUrl([])).toBe(undefined);
    expect(findLastUrl(['https://google.com', 'wss://chat.sample.com'])).toBe(
      'wss://chat.sample.com'
    );
    expect(
      findLastUrl([
        'https://google.com.vn',
        'wss://..com',
        'wss://chat.sample.',
        '://chat.sample.com',
      ])
    ).toBe('https://google.com.vn');
    expect(findLastUrl(['https://.com', '://.sample.com'])).toBe(undefined);
  });
});

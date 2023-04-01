// STRING-05: Ðếm số lượng url có trong câu
// Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
// Trả về số lượng URLs tìm thấy trong câu.

import { countURLs } from './STRING-05';

describe('countURLs(String)', () => {
  test('should return false if type is not String', () => {
    expect(countURLs(parseInt(56443))).toBe(false);
  });
  test('should return count of URL exist in String', () => {
    expect(countURLs('my website is: http://ezfrontend.com you can visit it')).toBe(1);
    expect(countURLs('my website is: https://ez.com you can visit it')).toBe(0);
    expect(countURLs('my website is: ws://ez.com.vn you can visit it')).toBe(0);
    expect(countURLs('my website is: wss://ez  .com you can visit it')).toBe(0);
    expect(countURLs('my website is: w://ez  .com you can visit it')).toBe(0);
  });
});

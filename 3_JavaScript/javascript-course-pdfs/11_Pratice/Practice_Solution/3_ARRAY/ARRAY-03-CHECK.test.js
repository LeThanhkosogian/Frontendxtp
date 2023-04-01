// ARRAY-CHECK-03: Kiểm tra có từ easy frontend trong mảng không
// Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend
// không nhé
// Trả về true nếu:
// Một phần tử có chứa cả 2 từ: "easy" và "frontend"
// Một phần tử chứa từ "easy" và một phần tử khác chứa "frontend"
// Ngược lại trả về false

import { hasEasyFrontend } from './ARRAY-03-CHECK';

describe('hasEasyFrontend(wordList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasEasyFrontend('string')).toBe('wrong type');
  });
  test('should return true/false', () => {
    expect(hasEasyFrontend(['easy', ''])).toBe(false);
    expect(hasEasyFrontend(['frontend', ' ', 'easy'])).toBe(true);
    expect(hasEasyFrontend(['frontendeasy', ''])).toBe(false);
    expect(hasEasyFrontend(['easyfrontend', ''])).toBe(false);
    expect(hasEasyFrontend(['easy frontend', ''])).toBe(true);
  });
});

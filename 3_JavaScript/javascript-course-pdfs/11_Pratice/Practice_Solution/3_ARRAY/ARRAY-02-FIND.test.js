// ARRAY-FIND-02: Tìm từ dài nhất nhưng nhỏ hơn 5 trong mảng
// Viết hàm findLongestWord(wordList) để tìm ra từ dài nhất trong mảng wordList
// Từ cần tìm có độ dài không quá 5
// Từ cần tìm không có chứa khoảng trắng (space)
// Trường hợp không tìm thấy từ thoả điều kiện thì trả về empty string.

import { findLongestWord } from './ARRAY-02-FIND';

describe('findLongestWord(wordList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findLongestWord('string')).toBe('wrong type');
  });
  test('should return the longest word', () => {
    expect(findLongestWord([])).toBe('');
    expect(findLongestWord(['super', 'cool'])).toBe('super');
    expect(findLongestWord(['sup er', 'super cool'])).toBe('');
    expect(findLongestWord(['su', 'sup'])).toBe('sup');
  });
});

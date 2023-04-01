// ARRAY-COUNT-03: Ðếm số từ có độ dài lớn hơn n
// Viết hàm countWords(wordList, n) để đếm xem có bao nhiều từ có độ dài lớn hơn hoặc bằng n

import { countWords } from './ARRAY-03-COUNT';

describe('countWords(wordList, n)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(countWords('string')).toBe('wrong type');
  });
  test('should return count', () => {
    expect(countWords(['easy', 'frontend'], 4)).toBe(2);
    expect(countWords(['easy', 'frontend'], 5)).toBe(1);
    expect(countWords(['easy', 'frontend'], 10)).toBe(0);
  });
});

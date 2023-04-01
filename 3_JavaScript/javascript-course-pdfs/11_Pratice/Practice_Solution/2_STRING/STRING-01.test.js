// STRING-01: Ðếm số từ có trong câu
// Viêt hàm countWords(str) để đếm số từ có trong str.

import { countWordsV1, countWordsV2 } from './STRING-01';

describe('countWordsV1', () => {
  test('should return false when type of parameter is not String', () => {
    expect(countWordsV1(parseInt(123456))).toBe(false);
  });
  test('should return the count of words', () => {
    expect(countWordsV1('Le Thanh')).toBe(2);
    expect(countWordsV1('Le Thanh ko so gian')).toBe(5);
    expect(countWordsV1('Le Thanh 210603')).toBe(3);
    expect(countWordsV1('Le Thanh pro')).toBe(3);
    expect(countWordsV1('Le')).toBe(1);
  });
});

describe('countWordsV2', () => {
  test('should return false when type of parameter is not String', () => {
    expect(countWordsV2(parseInt(123456))).toBe(false);
  });
  test('should return the count of words', () => {
    expect(countWordsV2('Le Thanh')).toBe(2);
    expect(countWordsV2('Le Thanh ko so gian')).toBe(5);
    expect(countWordsV2('Le Thanh 210603')).toBe(3);
    expect(countWordsV2('Le Thanh pro')).toBe(3);
    expect(countWordsV2('Le')).toBe(1);
  });
});

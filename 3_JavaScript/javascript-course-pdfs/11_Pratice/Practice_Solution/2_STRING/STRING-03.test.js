// STRING-03: Thống kê ký tự có trong câu
// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
// Trả về một object với:
// key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
// value là số lần xuất hiện của key

import { statisticsCharactersV1, statisticsCharactersV2 } from './STRING-03';

describe('statisticsCharactersV1(String)', () => {
  test('should return empty object in case str is empty', () => {
    expect(statisticsCharactersV1('')).toEqual({});
  });
  test('should return count of characters', () => {
    expect(statisticsCharactersV1('aabbccdd')).toEqual({
      a: 2,
      b: 2,
      c: 2,
      d: 2,
    });
    expect(statisticsCharactersV1('  a b c aa c a b  ')).toEqual({
      space: 10,
      a: 4,
      b: 2,
      c: 2,
    });
    expect(statisticsCharactersV1(' 21 06 2003 ')).toEqual({
      space: 4,
      2: 2,
      1: 1,
      0: 3,
      6: 1,
      3: 1,
    });
  });
});

describe('statisticsCharactersV2(String)', () => {
  test('should return empty object in case str is empty', () => {
    expect(statisticsCharactersV2('')).toEqual({});
  });
  test('should return count of characters', () => {
    expect(statisticsCharactersV2('aabbccdd')).toEqual({
      a: 2,
      b: 2,
      c: 2,
      d: 2,
    });
    expect(statisticsCharactersV2('  a b c aa c a b  ')).toEqual({
      space: 10,
      a: 4,
      b: 2,
      c: 2,
    });
    expect(statisticsCharactersV2(' 21 06 2003 ')).toEqual({
      space: 4,
      2: 2,
      1: 1,
      0: 3,
      6: 1,
      3: 1,
    });
  });
});

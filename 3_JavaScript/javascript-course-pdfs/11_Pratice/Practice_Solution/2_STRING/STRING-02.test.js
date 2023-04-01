// STRING-02: Thống kê số lượng từ trong câu
// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key

import { statisticsWordsV1, statisticsWordsV2 } from './STRING-02';

describe('statisticsWordsV1(String)', () => {
  test('should return false in case parameter is not String', () => {
    expect(statisticsWordsV1(parseInt(13654165))).toEqual(false);
  });
  test('should return empty object in case str is empty', () => {
    expect(statisticsWordsV1('')).toEqual({});
  });
  test("should return correct statistics when str doesn't have redundant spaces", () => {
    expect(statisticsWordsV1('easy frontend is very easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
    expect(statisticsWordsV1('Le Le Trung Thanh')).toEqual({
      Le: 2,
      Trung: 1,
      Thanh: 1,
    });
  });
  test('should return correct statistics when str has redundant spaces', () => {
    expect(statisticsWordsV1(' easy     frontend   is   very    easy     ')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
    expect(statisticsWordsV1('  Le   Thanh   ko   ko   ko   so   gian')).toEqual({
      Le: 1,
      Thanh: 1,
      ko: 3,
      so: 1,
      gian: 1,
    });
  });
});

describe('statisticsWordsV2(String)', () => {
  test('should return false in case parameter is not String', () => {
    expect(statisticsWordsV2(parseInt(13654165))).toEqual(false);
  });
  test('should return empty object in case str is empty', () => {
    expect(statisticsWordsV2('')).toEqual({});
  });
  test("should return correct statistics when str doesn't have redundant spaces", () => {
    expect(statisticsWordsV2('easy frontend is very easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
    expect(statisticsWordsV2('Le Le Trung Thanh')).toEqual({
      Le: 2,
      Trung: 1,
      Thanh: 1,
    });
  });
  test('should return correct statistics when str has redundant spaces', () => {
    expect(statisticsWordsV2(' easy     frontend   is   very    easy     ')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
    expect(statisticsWordsV2('  Le   Thanh   ko   ko   ko   so   gian')).toEqual({
      Le: 1,
      Thanh: 1,
      ko: 3,
      so: 1,
      gian: 1,
    });
  });
});

// ARRAY-FIND-12: Tìm student có điểm trung bình môn thấp nhất cuối cùng
// Viết hàm findLastStudentHavingMinAvg(studentList) để tìm ra student có điểm trung bình môn thấp nhất
// cuối cùng trong mảng.

import { findLastStudentHavingMinAvg } from './ARRAY-12-FIND';

const studentList1 = [];

const studentList2 = [
  { id: 1, name: 'Alice', math: 9, english: 9 },
  { id: 2, name: 'Bob', math: 5, english: 5 },
  { id: 3, name: 'John', math: 5, english: 5 },
  { id: 4, name: 'Putin', math: 1, english: 2 },
  { id: 5, name: 'Jane', math: 7, english: 3 },
  { id: 6, name: 'Marry', math: 0, english: 1 },
  { id: 7, name: 'Furry', math: 1, english: 1 },
];

describe('findLastStudentHavingMinAvg(studentList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findLastStudentHavingMinAvg('string')).toBe('wrong type');
  });
  test('should return the last and lowest score student', () => {
    expect(findLastStudentHavingMinAvg(studentList1)).toEqual(undefined);
    expect(findLastStudentHavingMinAvg(studentList2)).toEqual({
      id: 6,
      name: 'Marry',
      math: 0,
      english: 1,
    });
  });
});

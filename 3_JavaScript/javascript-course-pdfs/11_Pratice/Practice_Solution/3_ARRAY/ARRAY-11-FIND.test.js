// ARRAY-FIND-11: Tìm student có điểm môn toán lớn nhất đầu tiên
// Viết hàm findStudentHavingHighestMark(studentList) để tìm ra student để điểm môn toán cao nhất.

import { findStudentHavingHighestMark } from './ARRAY-11-FIND';

const studentList1 = [];
const studentList2 = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 10 },
  { id: 3, name: 'John', math: 10 },
];

describe('findStudentHavingHighestMark(studentList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findStudentHavingHighestMark('string')).toBe('wrong type');
  });
  test('should return the first highest score student', () => {
    expect(findStudentHavingHighestMark(studentList1)).toEqual(undefined);
    expect(findStudentHavingHighestMark(studentList2)).toEqual({ id: 2, name: 'Bob', math: 10 });
  });
});

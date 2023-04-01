// ARRAY-CD-03: Xoá một student có id cho trước
// Viết hàm removeStudentByIdStudentById(studentList, studentId) để removeStudentById student có id là studentId ra khỏi
// mảng studentList và trả về mảng mới.

import { removeStudentById } from './ARRAY-03-CD';

const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

describe('removeStudentById(studentList, studentId)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(removeStudentById('string')).toBe('wrong type');
  });
  test('should return sum', () => {
    expect(removeStudentById(studentList, 0)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });
  test('should return sum', () => {
    expect(removeStudentById(studentList, 1)).toEqual([{ id: 2, name: 'Bob' }]);
  });
  test('should return sum', () => {
    expect(removeStudentById(studentList, 2)).toEqual([{ id: 1, name: 'Alice' }]);
  });
});

// ARRAY-FIND-09: Tìm vị trí của student có id cho trước
// Viết hàm findStudentById(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId.

import { findStudentById } from './ARRAY-09-FIND';

const studentList1 = [];
const studentList2 = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
  { id: 3, name: 'Easy' },
  { id: 4, name: 'Frontend' },
];

describe('findStudentById(studentList, studentId)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findStudentById('string')).toBe('wrong type');
  });
  test('should return the index of student', () => {
    expect(findStudentById(studentList1, 1)).toBe(undefined);
    expect(findStudentById(studentList2, 5)).toBe(undefined);
    expect(findStudentById(studentList2, 2)).toBe(1);
  });
});

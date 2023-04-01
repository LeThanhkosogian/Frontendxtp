// ARRAY-FILTER-07: Tìm tất cả student có điểm toán nhỏ hơn 5
// Viết hàm findAllStudents(studentList) để tìm ra tất cả student có điểm toán nhỏ hơn 5

import { findAllStudents } from './ARRAY-07-FILTER';

const studentList1 = [];
const studentList2 = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 4 },
  { id: 3, name: 'John', math: 0 },
];
const studentList3 = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 5 },
  { id: 3, name: 'John', math: 6 },
];

describe('findAllStudents(studentList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findAllStudents('string')).toBe('wrong type');
  });
  test('should return required array', () => {
    expect(findAllStudents(studentList1)).toEqual([]);
    expect(findAllStudents(studentList3)).toEqual([]);
    expect(findAllStudents(studentList2)).toEqual([
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ]);
  });
});

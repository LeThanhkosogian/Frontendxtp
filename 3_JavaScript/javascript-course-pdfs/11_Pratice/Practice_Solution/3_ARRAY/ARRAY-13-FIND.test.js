// ARRAY-FIND-13: Tìm student đầu tiên có tất cả điểm >= 5, trừ một môn
// Viết hàm findStudent(studentList) để tìm ra student đầu tiên có trong mảng có tất cả các điểm đều lớn
// hơn hoặc bằng 5, tuy nhiên có một môn dưới 5.

import { findStudent } from './ARRAY-13-FIND';

const studentList1 = [];

const studentList2 = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
  { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
  { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
  { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
];

describe('findStudent(studentList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findStudent('string')).toBe('wrong type');
  });
  test('should return the required student', () => {
    expect(findStudent(studentList1)).toEqual(undefined);
    expect(findStudent(studentList2)).toEqual({
      id: 3,
      name: 'John',
      marks: { math: 4, english: 7, programming: 9 },
    });
  });
});

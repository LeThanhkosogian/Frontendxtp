// ARRAY-COUNT-06: Ðếm số lượng students có điểm trung bình lớn hơn hoặc bằng avgMark
// Viết hàm countStudents(studentList, avgMark) để đếm số lượng student có điểm trung bình môn lớn hơn
// hoặc bằng avgMark
// Cách tính điểm trung bình môn:
// Giả sử mình không biết trước sẽ có bao nhiêu môn
// Dựa vào object marks để xác định, có bao nhiêu keys là bấy nhiêu môn và tính điểm trung bình môn
// tương ứng.
// Một student list sẽ đảm bảo là số lượng keys trong object marks sẽ giống nhau.

import { countStudents } from './ARRAY-06-COUNT';

const studentList1 = [
  { id: 1, name: 'Alice', marks: { math: 8 } },
  { id: 2, name: 'Bob', marks: { math: 9 } },
];

const studentList2 = [
  { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
  { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
];

const studentList3 = [
  { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
  { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
  { id: 2, name: 'John', marks: { math: 1, english: 2 } },
  { id: 2, name: 'Depp', marks: { math: 6, english: 3 } },
  { id: 2, name: 'Park', marks: { math: 3, english: 7 } },
];

describe('countStudents(studentList, avgMark )', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(countStudents('string')).toBe('wrong type');
  });
  test('should return count', () => {
    expect(countStudents(studentList1, 7)).toBe(2);
    expect(countStudents(studentList2, 7)).toBe(1);
    expect(countStudents(studentList3, 9)).toBe(0);
  });
});

// ARRAY-CHECK-06: Kiểm tra có student có id nào đó trong mảng không
// Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là
// studentId không?

import { hasStudent } from './ARRAY-06-CHECK';

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

describe('hasStudent(studentList, studentId)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasStudent([1, 2, 3], 'string')).toEqual('wrong type');
  });
  test('should return the exist of student', () => {
    expect(hasStudent(studentList, 1)).toEqual(true);
    expect(hasStudent(studentList, 2)).toEqual(true);
    expect(hasStudent(studentList, 3)).toEqual(false);
  });
});

// ARRAY-CHECK-07: Kiểm tra có student giới tính là Nữ tên Alice không
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
// (không phân biệt hoa thường)

import { hasAlice } from './ARRAY-07-CHECK';

const studentList1 = [
  { id: 1, name: 'Alice', gender: 'female' },
  { id: 2, name: 'aliCE', gender: 'male' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];
const studentList2 = [
  { id: 1, name: 'Atom', gender: 'male' },
  { id: 2, name: 'aliCE', gender: 'female' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];
const studentList3 = [
  { id: 1, name: 'Ali', gender: 'male' },
  { id: 2, name: 'aliCE', gender: 'male' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];
describe('hasAlice(studentList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasAlice(1)).toEqual('wrong type');
  });
  test('should return the exist of student', () => {
    expect(hasAlice(studentList1)).toEqual(true);
    expect(hasAlice(studentList2)).toEqual(true);
    expect(hasAlice(studentList3)).toEqual(false);
  });
});

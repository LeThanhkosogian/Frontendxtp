export function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || typeof studentId !== 'number') return 'wrong type';
  for (let key in studentList) {
    if (studentList[key].id === studentId) return true;
  }
  return false;
}

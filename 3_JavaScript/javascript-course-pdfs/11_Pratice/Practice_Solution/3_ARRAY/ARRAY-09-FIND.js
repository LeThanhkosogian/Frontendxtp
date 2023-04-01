export function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList)) return 'wrong type';
  if (studentList.length === 0) return undefined;
  for (let i in studentList) {
    if (studentList[i].id === studentId) return parseInt(i);
  }
  return undefined;
}

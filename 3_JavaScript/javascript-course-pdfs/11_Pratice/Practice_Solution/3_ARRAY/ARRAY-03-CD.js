export function removeStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || typeof studentId !== 'number') return 'wrong type';
  return studentList.filter((student) => student.id !== studentId);
}

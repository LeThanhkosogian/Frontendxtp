export function findAllStudents(studentList) {
  if (!Array.isArray(studentList)) return 'wrong type';
  return studentList.filter((student) => {
    return student.math < 5;
  });
}

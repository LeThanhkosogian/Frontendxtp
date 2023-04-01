export function findStudentHavingHighestMark(studentList) {
  if (!Array.isArray(studentList)) return 'wrong type';
  if (studentList.length === 0) return undefined;
  studentList.sort((a, b) => {
    return b.math - a.math && b.id - a.id;
  });
  return studentList[0];
}

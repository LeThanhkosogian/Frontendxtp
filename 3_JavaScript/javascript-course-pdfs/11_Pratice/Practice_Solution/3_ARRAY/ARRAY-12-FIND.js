export function findLastStudentHavingMinAvg(studentList) {
  if (!Array.isArray(studentList)) return 'wrong type';
  if (studentList.length === 0) return undefined;
  studentList.sort((a, b) => {
    return (a.math + a.english) / 2 - (b.math + b.english) / 2;
  });
  let minAvg = (studentList[0].math + studentList[0].english) / 2;
  for (let i = studentList.length - 1; i >= 0; i--) {
    if ((studentList[i].math + studentList[i].english) / 2 === minAvg) return studentList[i];
  }
}

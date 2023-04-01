export function countStudents(studentList, avgMark) {
  if (!Array.isArray(studentList) || typeof avgMark !== 'number') return 'wrong type';
  let count = 0;
  let countOfSubjects = Object.keys(studentList[0].marks).length;
  for (let student in studentList) {
    let sumMark = 0;
    for (let subject in studentList[student].marks) {
      sumMark += studentList[student].marks[subject];
    }
    if (sumMark / countOfSubjects >= avgMark) count++;
  }
  return count;
}

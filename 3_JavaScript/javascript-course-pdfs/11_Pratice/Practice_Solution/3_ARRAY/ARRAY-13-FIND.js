const studentList2 = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
  { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
  { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
  { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
];

export function findStudent(studentList) {
  if (!Array.isArray(studentList)) return 'wrong type';
  if (studentList.length === 0) return undefined;
  for (let i in studentList) {
    let hasAvgGreaterOrEqualTo5 =
      (studentList[i].marks.math +
        studentList[i].marks.english +
        studentList[i].marks.programming) /
        3 >=
      5
        ? true
        : false;
    let has1SubjectLowerThan5 =
      studentList[i].marks.math < 5 ||
      studentList[i].marks.english < 5 ||
      studentList[i].marks.programming < 5
        ? true
        : false;
    if (hasAvgGreaterOrEqualTo5 && has1SubjectLowerThan5) return studentList[i];
  }
}

console.log(findStudent(studentList2));

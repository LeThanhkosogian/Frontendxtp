export function hasAlice(studentList) {
  if (!Array.isArray(studentList)) return 'wrong type';
  for (let key in studentList) {
    if (studentList[key].gender === 'female' && studentList[key].name.toUpperCase() === 'ALICE')
      return true;
  }
  return false;
}

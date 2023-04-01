export function hasFalsy(array) {
  if (Array.isArray(array) === false) return 'wrong type';
  for (let i in array) {
    if (!array[i]) return true;
  }
  return false;
}

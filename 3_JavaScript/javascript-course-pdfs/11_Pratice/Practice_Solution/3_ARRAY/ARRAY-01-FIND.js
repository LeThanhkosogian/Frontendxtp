export function findMinPositive(array) {
  if (!Array.isArray(array)) return 'wrong type';
  let minPositiveNum = array[0];
  for (let i in array) {
    if (minPositiveNum > array[i] && array[i] > 0) minPositiveNum = array[i];
  }
  if (minPositiveNum <= 0) return undefined;
  return minPositiveNum;
}

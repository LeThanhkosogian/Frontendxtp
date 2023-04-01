export function findLastNegativeOdd(array) {
  if (!Array.isArray(array)) return 'wrong type';
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < 0 && array[i] % 2 !== 0) return array[i];
  }
  return undefined;
}

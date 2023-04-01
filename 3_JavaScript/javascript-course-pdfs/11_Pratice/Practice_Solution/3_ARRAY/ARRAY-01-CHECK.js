export function hasEvenNumberGreaterThanN(array, n) {
  if (Array.isArray(array) === false || typeof n !== 'number') return 'wrong type';
  return array.some((x) => x > n && x % 2 === 0);
}

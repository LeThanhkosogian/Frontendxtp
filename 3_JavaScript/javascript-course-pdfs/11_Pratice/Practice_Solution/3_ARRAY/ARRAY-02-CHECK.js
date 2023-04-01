export function hasOddNumberDivisibleBy3(array) {
  if (Array.isArray(array) === false) return 'wrong type';
  return array.some((x) => x % 3 === 0 && x % 2 !== 0);
}

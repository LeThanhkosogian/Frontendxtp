export function findFirstPositiveEven(array) {
  if (!Array.isArray(array)) return 'wrong type';
  return array.find((number) => number > 0 && number % 2 === 0);
}

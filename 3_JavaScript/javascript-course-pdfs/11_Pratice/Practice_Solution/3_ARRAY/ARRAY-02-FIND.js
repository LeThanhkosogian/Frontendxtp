export function findLongestWord(array) {
  if (!Array.isArray(array)) return 'wrong type';
  array = array.filter((word) => word.length <= 5 && !word.includes(' '));
  if (array.length === 0) return '';
  let maxLength = array[0].length;
  for (let i = 0; i < array.length; i++) {
    if (maxLength < array[i].length) {
      maxLength = array[i].length;
    }
  }
  return array.find((word) => word.length === maxLength);
}

export function findSecondLargestNumber(array) {
  if (!Array.isArray(array)) return 'wrong type';
  array = array.sort((a, b) => {
    return -1;
  });
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) return array[i];
  }

  return undefined;
}

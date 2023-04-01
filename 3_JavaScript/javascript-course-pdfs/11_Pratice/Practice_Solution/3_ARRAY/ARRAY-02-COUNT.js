export function countNumbers(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  let count = 0;
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] < numberList[i - 1]) count++;
  }
  return count;
}

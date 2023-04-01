export function findNumbers(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  let answerArray = [];
  if (numberList.length <= 1) return [];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > numberList[i - 1]) answerArray.push(numberList[i]);
  }
  return answerArray;
}

export function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  let sum = 0;
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > numberList[i - 1] && numberList[i] % 2 === 0) sum += numberList[i];
  }
  return sum;
}

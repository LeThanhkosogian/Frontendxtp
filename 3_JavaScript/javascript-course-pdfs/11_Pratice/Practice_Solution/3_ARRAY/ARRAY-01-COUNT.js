export function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  return numberList.reduce((countOfPositiveNumbers, number) => {
    if (number > 0 && number % 2 === 0) countOfPositiveNumbers++;
    return countOfPositiveNumbers++;
  }, 0);
}

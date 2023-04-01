function sumOfDigits(x) {
  return x
    .toString()
    .split('')
    .reduce((sum, digit) => {
      sum += parseInt(digit);
      return sum;
    }, 0);
}

export function sumAllDigits(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  return numberList.reduce((sum, number) => {
    sum += sumOfDigits(number);
    return sum;
  }, 0);
}

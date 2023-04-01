function getMinDigit(x) {
  return parseInt(x.toString().split('').sort()[0]);
}

export function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  return numberList.reduce((sum, number) => {
    sum += getMinDigit(number);
    return sum;
  }, 0);
}

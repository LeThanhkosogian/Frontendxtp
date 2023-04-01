export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  for (let i in numberList) {
    if (numberList[i] !== numberList[numberList.length - 1 - i]) return false;
  }
  return true;
}

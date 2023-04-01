function compare(a, b) {
  return b - a;
}

export function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  for (let i = 0; i < numberList.length - 1; i++) {
    if (compare(numberList[i], numberList[i + 1]) <= 0) return false;
  }
  return true;
}

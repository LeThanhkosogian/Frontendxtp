export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[j] === numberList[i]) numberList[j] = false;
    }
  }
  return numberList.filter((number) => number !== false).length;
}

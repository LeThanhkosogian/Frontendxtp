export function uniqueArray(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[j] === numberList[i]) {
        numberList[j] = 'repeated';
      }
    }
  }
  return numberList.filter((number) => number !== 'repeated');
}

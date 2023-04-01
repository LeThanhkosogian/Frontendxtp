export function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  for (let i = 0; i < numberList.length; i++) {
    let count = 0;
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[j] === numberList[i]) {
        numberList[j] = 'repeated';
        count++;
      }
    }
    if (count > 0) numberList[i] = 'repeated';
  }
  return numberList.filter((number) => number !== 'repeated');
}

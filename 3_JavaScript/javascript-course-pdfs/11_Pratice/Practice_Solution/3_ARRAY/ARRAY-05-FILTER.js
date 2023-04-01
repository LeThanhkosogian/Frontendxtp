export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  let answerArray = [];
  let posOfFirstEvenNumber = numberList.findIndex((x) => x % 2 === 0);
  let FirstEvenNumber = numberList[posOfFirstEvenNumber];
  for (let i = posOfFirstEvenNumber + 1; i < numberList.length; i++) {
    if (numberList[i] === FirstEvenNumber) answerArray.push(numberList[i]);
  }
  return answerArray;
}

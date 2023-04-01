function checkNumberStartByOdd(number) {
  if (
    (number > 0 && parseInt(number.toString()[0]) % 2 !== 0) ||
    (number < 0 && parseInt(number.toString()[1]) % 2 !== 0)
  )
    return true;
  return false;
}
export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  let answerArray = [];
  for (let i in numberList) {
    if (checkNumberStartByOdd(numberList[i])) answerArray.push(numberList[i]);
  }
  return answerArray;
}

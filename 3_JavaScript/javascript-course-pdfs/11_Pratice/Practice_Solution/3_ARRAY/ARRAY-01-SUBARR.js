const arr = [-1, 1, 2, 3, -5, -10, 5, 10];

export function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList)) return 'wrong type';
  let answerArray = [];
  for (let i = 0; i < numberList.length; i++) {
    let subArray = [];
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[j] > numberList[j - 1]) {
        subArray.push(numberList[j]);
      } else break;
    }
    if (subArray.length > 0 && numberList[i] < subArray[0]) {
      subArray.push(numberList[i]);
      answerArray.push(subArray);
    }
  }
  return answerArray;
}

console.log(findAllIncreasingSubArr(arr));

export function generateFibonacci(n) {
  if (typeof n !== 'number') return 'wrong type';
  if (n <= 0) return [];
  let answerArray = [];
  answerArray.push(0);
  answerArray.push(1);
  let i = 2;
  while (answerArray[answerArray.length - 1] < n) {
    if (answerArray[i - 1] + answerArray[i - 2] < n) {
      answerArray.push(answerArray[i - 1] + answerArray[i - 2]);
    } else break;
    i++;
  }
  return answerArray;
}

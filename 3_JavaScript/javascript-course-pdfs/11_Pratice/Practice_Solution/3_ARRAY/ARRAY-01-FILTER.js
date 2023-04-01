export function generateNumberInRange(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'wrong type';
  let answerArray = [];
  if (a > b) return [];
  for (let i = a; i <= b; i++) {
    answerArray.push(i);
  }
  return answerArray;
}

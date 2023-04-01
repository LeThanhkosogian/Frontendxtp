export function countNumbersNotInB(numberListA, numberListB) {
  if (!Array.isArray(numberListA) || !Array.isArray(numberListB)) return 'wrong type';

  return numberListA.reduce((count, number) => {
    if (!numberListB.includes(number)) count++;
    return count;
  }, 0);
}

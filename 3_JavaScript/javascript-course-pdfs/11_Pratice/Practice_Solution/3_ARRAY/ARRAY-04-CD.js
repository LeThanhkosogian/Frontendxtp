export function insert(numberList, newNumber) {
  if (!Array.isArray(numberList) || typeof newNumber !== 'number') return 'wrong type';
  return numberList.concat(newNumber).sort();
}

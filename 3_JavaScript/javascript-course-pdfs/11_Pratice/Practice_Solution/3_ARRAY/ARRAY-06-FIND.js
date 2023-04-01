function perfectSquare(n) {
  return Math.round(Math.sqrt(n)) ** 2 === n && n > 0;
}

export function findLastPerfectSquare(array) {
  if (!Array.isArray(array)) return 'wrong type';
  for (let i = array.length - 1; i >= 0; i--) {
    if (perfectSquare(array[i])) return array[i];
  }
  return undefined;
}

function isPrime(x) {
  if (x < 2) return false;
  if (x === 2) return true;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

export function generatePrimeNumbers(n) {
  if (typeof n !== 'number' || n <= 0 || n >= 1000) return 'wrong type';
  if (n < 2) return [];
  let answerArray = [];
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) answerArray.push(i);
  }
  return answerArray;
}

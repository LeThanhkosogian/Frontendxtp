function fibonacciListLowerThanN(n) {
  let fibonacciList = [];
  fibonacciList.push(0);
  fibonacciList.push(1);
  let i = 1;
  while (fibonacciList[i - 1] + fibonacciList[i] < n) {
    let theNextFibonacci = fibonacciList[i - 1] + fibonacciList[i];
    fibonacciList.push(theNextFibonacci);
    i++;
  }
  return fibonacciList;
}

export function hasFibonacciNumber(array) {
  if (!Array.isArray(array)) return 'wrong type';
  let fibonacciList = fibonacciListLowerThanN(100);
  for (let i = 0; i < array.length; i++) {
    if (fibonacciList.includes(array[i])) return true;
  }
  return false;
}

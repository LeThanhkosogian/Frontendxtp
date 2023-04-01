export function remove(arr, k, n) {
  if (!Array.isArray(arr) || typeof k !== 'number' || typeof k !== 'number') return 'wrong type';
  if (k < 0 || k >= arr.length) return arr;
  else if (n === undefined) return arr.slice(0, k);
  else return arr.slice(0, k).concat(arr.slice(k + n));
}

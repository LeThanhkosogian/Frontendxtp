export function insert(arr, newItem, k) {
  if (!Array.isArray(arr) || typeof newItem !== 'number' || typeof k !== 'number')
    return 'wrong type';
  if (k <= 0) arr.unshift(newItem);
  else if (k > arr.length) arr.push(newItem);
  else arr.splice(k, 0, newItem);
  return arr;
}

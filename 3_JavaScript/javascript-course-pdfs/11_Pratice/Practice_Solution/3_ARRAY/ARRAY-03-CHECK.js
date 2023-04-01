export function hasEasyFrontend(array) {
  if (Array.isArray(array) === false) return 'wrong type';
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(' ');
  }
  let hasEasy = false;
  let hasFrontend = false;
  for (let y in array) {
    for (let x in array[y]) {
      if (array[y][x] === 'easy') hasEasy = true;
      if (array[y][x] === 'frontend') hasFrontend = true;
    }
  }
  return hasEasy && hasFrontend;
}

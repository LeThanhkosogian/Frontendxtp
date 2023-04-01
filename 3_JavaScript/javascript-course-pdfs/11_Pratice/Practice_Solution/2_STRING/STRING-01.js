export function countWordsV1(String) {
  if (typeof String !== 'string') return false;
  String = String.trim();
  let countSpaces = 0;
  for (let i = 0; i < String.length; i++) {
    if (String[i] === ' ') countSpaces++;
  }
  return countSpaces + 1;
}

export function countWordsV2(String) {
  if (typeof String !== 'string') return false;
  return String.split(' ').length;
}

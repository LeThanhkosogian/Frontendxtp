export function countWords(wordList, n) {
  if (!Array.isArray(wordList) || typeof n !== 'number') return 'wrong type';
  return wordList.reduce((count, word) => {
    if (word.length >= n) count++;
    return count;
  }, 0);
}

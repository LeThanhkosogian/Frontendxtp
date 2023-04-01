export function statisticsWordsV1(String) {
  if (String === '') return {};
  if (typeof String !== 'string') return false;
  const answerObject = {};
  const Array = String.trim()
    .split(' ')
    .filter((x) => x !== '')
    .forEach((word) => {
      answerObject[word] = answerObject[word] !== undefined ? answerObject[word] + 1 : 1;
    });
  return answerObject;
}

export function statisticsWordsV2(String) {
  if (String === '') return {};
  if (typeof String !== 'string') return false;
  return String.split(' ')
    .filter((x) => x !== '')
    .reduce((answerObject, word) => {
      answerObject[word] = answerObject[word] !== undefined ? answerObject[word] + 1 : 1;
      return answerObject;
    }, {});
}

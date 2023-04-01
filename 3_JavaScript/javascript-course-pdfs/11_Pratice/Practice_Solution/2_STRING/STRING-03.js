export function statisticsCharactersV1(String) {
  if (String === '') return {};
  return String.split('')
    .filter((x) => x !== '')
    .reduce((answerObject, character) => {
      if (character === ' ') character = 'space';
      answerObject[character] =
        answerObject[character] !== undefined ? answerObject[character] + 1 : 1;
      return answerObject;
    }, {});
}

export function statisticsCharactersV2(String) {
  if (String === '') return {};
  const answerObject = {};
  const Array = String.split('')
    .filter((x) => x !== '')
    .forEach((character) => {
      if (character === ' ') character = 'space';
      answerObject[character] =
        answerObject[character] !== undefined ? answerObject[character] + 1 : 1;
    });
  return answerObject;
}

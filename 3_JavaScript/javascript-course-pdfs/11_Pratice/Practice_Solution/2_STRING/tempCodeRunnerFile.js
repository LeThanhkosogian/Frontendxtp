function getDisplayedAddress(Object) {
  if (typeof Object !== 'object') return '';
  for (let key in Object) Object[key].toString();
  Object.street = Object.number !== undefined ? ' ' + Object.street : Object.street;
  Object.ward = Object.street !== undefined ? ', ' + Object.ward : Object.ward;
  Object.district = Object.ward !== undefined ? ', ' + Object.district : Object.district;
  Object.city = Object.district !== undefined ? ', ' + Object.city : Object.city;

  let answerString = '';
  for (let key in Object)
    answerString +=
      Object[key] !== ', undefined' && Object[key] !== ' undefined' ? Object[key] : '';
  return answerString;
}

console.log(
  getDisplayedAddress({
    number: 123,
    city: 'HCMC',
  })
);
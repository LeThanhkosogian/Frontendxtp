export function hasFreeShip(productList, price) {
  if (!Array.isArray(productList) || typeof price !== 'number') return 'wrong type';
  for (let key in productList) {
    if (productList[key].isFreeShip && productList[key].price < price) return true;
  }
  return false;
}

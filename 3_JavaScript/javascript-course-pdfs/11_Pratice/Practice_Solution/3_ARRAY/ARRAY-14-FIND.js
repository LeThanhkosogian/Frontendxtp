export function findProductHavingFreeShip(productList) {
  if (!Array.isArray(productList)) return 'wrong type';
  if (productList.length === 0) return undefined;
  for (let i in productList) {
    if (productList[i].isFreeShip) return productList[i];
  }
}

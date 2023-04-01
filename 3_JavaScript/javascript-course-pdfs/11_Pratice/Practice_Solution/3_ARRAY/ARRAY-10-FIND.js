export function findProductByCode(productList, code) {
  if (!Array.isArray(productList)) return 'wrong type';
  if (productList.length === 0) return undefined;
  for (let i in productList) {
    if (productList[i].code === code) return parseInt(i);
  }
  return undefined;
}

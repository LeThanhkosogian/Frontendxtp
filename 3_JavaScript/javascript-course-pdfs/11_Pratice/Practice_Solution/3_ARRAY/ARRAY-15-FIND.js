export function findFirstIPhone(productList) {
  if (!Array.isArray(productList)) return 'wrong type';
  if (productList.length === 0) return undefined;
  for (let i in productList) {
    if (productList[i].name.toLowerCase().startsWith('iphone')) return productList[i];
  }
}

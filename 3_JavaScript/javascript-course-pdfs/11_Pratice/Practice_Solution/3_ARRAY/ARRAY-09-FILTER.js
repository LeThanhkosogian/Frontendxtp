export function findAllIphone(productList) {
  if (!Array.isArray(productList)) return 'wrong type';
  return productList.filter((product) => {
    return product.name.toLowerCase().includes('iphone') && product.amount > 0;
  });
}

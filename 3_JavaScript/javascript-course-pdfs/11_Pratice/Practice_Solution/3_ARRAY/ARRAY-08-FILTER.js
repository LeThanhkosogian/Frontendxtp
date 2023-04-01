export function findAllProducts(productList) {
  if (!Array.isArray(productList)) return 'wrong type';
  return productList.filter((product) => {
    return product.isFreeShip === true;
  });
}

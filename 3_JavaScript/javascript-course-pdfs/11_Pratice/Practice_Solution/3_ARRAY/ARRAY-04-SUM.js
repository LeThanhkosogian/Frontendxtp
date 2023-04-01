const cartItemList2 = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 20000 }, quantity: 2 },
  { id: 3, product: { id: 3, price: 10000 }, quantity: 2 },
  { id: 4, product: { id: 4, price: 100000 }, quantity: 2 },
  { id: 5, product: { id: 5, price: 250000 }, quantity: 2 },
];
console.log(cartItemList2.length);
export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList)) return 'wrong type';
  let sum = 0;
  for (let item in cartItemList) {
    sum += cartItemList[item].product.price * cartItemList[item].quantity;
  }
  return sum;
}

console.log(calcCartTotal(cartItemList2));

// ARRAY-SUM-04: Tổng tiền của giỏ hàng
// Viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng.

import { calcCartTotal } from './ARRAY-04-SUM';

const cartItemList1 = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
];

const cartItemList2 = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 20000 }, quantity: 2 },
  { id: 3, product: { id: 3, price: 10000 }, quantity: 2 },
  { id: 4, product: { id: 4, price: 100000 }, quantity: 2 },
  { id: 5, product: { id: 5, price: 250000 }, quantity: 2 },
];

describe('calcCartTotal(cartItemList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(calcCartTotal('string')).toBe('wrong type');
  });
  test('should return sum', () => {
    expect(calcCartTotal(cartItemList1)).toBe(250000);
    expect(calcCartTotal(cartItemList2)).toBe(810000);
  });
});

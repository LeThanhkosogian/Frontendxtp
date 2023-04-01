// ARRAY-CHECK-08: Kiểm tra có sản phẩm nhỏ hơn giá cho trước và free ship không
// Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào freeship và giá nhỏ hơn price
// không?

import { hasFreeShip } from './ARRAY-08-CHECK';

const productList = [
  { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
  { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
];

describe('hasFreeShip(productList, price)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(hasFreeShip(productList, 'string')).toEqual('wrong type');
  });
  test('should return true if product that has discount', () => {
    expect(hasFreeShip(productList, 10000000)).toEqual(true);
    expect(hasFreeShip(productList, 1000000)).toEqual(false);
  });
});

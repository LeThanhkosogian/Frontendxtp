// ARRAY-FIND-14: Tìm sản phầm đầu tiên có free ship
// Viết hàm findProductHavingFreeShip(productList) để tìm ra sản phẩm đầu tiên có free ship.

import { findProductHavingFreeShip } from './ARRAY-14-FIND';

const productList1 = [];

const productList2 = [
  { id: 1, name: 'IPhone 5', isFreeShip: false },
  { id: 2, name: 'IPhone X', isFreeShip: true },
  { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
];

describe('findProductHavingFreeShip(productList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findProductHavingFreeShip('string')).toBe('wrong type');
  });
  test('should return the required student', () => {
    expect(findProductHavingFreeShip(productList1)).toEqual(undefined);
    expect(findProductHavingFreeShip(productList2)).toEqual({
      id: 2,
      name: 'IPhone X',
      isFreeShip: true,
    });
  });
});

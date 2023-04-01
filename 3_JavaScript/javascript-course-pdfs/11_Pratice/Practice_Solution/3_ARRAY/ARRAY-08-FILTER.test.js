// ARRAY-FILTER-08: Tìm tất cả sản phẩm có hỗ trợ free ship
// Viết hàm findAllProducts(productList) để tìm ra tất cả product có isFreeShip=true

import { findAllProducts } from './ARRAY-08-FILTER';

const productList1 = [];
const productList2 = [
  { id: 1, name: 'iphone X', isFreeShip: false },
  { id: 2, name: 'iphone 16 Pro', isFreeShip: false },
  { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
];
const productList3 = [
  { id: 1, name: 'iphone X', isFreeShip: true },
  { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
  { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
];

describe('findAllProducts(productList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findAllProducts('string')).toBe('wrong type');
  });
  test('should return required array', () => {
    expect(findAllProducts(productList1)).toEqual([]);
    expect(findAllProducts(productList2)).toEqual([]);
    expect(findAllProducts(productList3)).toEqual([
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    ]);
  });
});

// ARRAY-FILTER-09: Tìm tất cả sản phẩm thuộc dòng iphone và còn hàng trong kho
// Viết hàm findAllIphones(productList) để tìm ra tất cả các product có tên chứa chữ iphone (ko phân biệt
// hoa thường) và vẫn còn hàng trong kho (amount > 0)

import { findAllIphone } from './ARRAY-09-FILTER';

const productList1 = [];
const productList2 = [
  { id: 1, name: 'Luxury  X', amount: 1 },
  { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
  { id: 3, name: 'iphone 20 Pro', amount: 2 },
];
const productList3 = [
  { id: 1, name: 'Luxury IPhone X', amount: 1 },
  { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
  { id: 3, name: 'iphone 20 Pro', amount: 2 },
];

describe('findAllIphone(productList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findAllIphone('string')).toBe('wrong type');
  });
  test('should return required array', () => {
    expect(findAllIphone(productList1)).toEqual([]);
    expect(findAllIphone(productList2)).toEqual([{ id: 3, name: 'iphone 20 Pro', amount: 2 }]);
    expect(findAllIphone(productList3)).toEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });
});

// ARRAY-FIND-10: Tìm vị trí của sản phẩm có mã code là = abc
// Viết hàm findProductByCode(productList, code) để tìm ra vị trí product có mã sản phẩm bằng với code.

import { findProductByCode } from './ARRAY-10-FIND';

const productList1 = [];
const productList2 = [
  { id: 1, code: 'ip01', name: 'IPhone 16' },
  { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
];

describe('findProductByCode(productList, code)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findProductByCode('string')).toBe('wrong type');
  });
  test('should return product index', () => {
    expect(findProductByCode(productList1, 'ip01')).toBe(undefined);
    expect(findProductByCode(productList2, 'ip02')).toBe(1);
    expect(findProductByCode(productList2, 'ip03')).toBe(undefined);
  });
});

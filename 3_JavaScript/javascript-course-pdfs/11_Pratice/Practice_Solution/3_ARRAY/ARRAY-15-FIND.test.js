// ARRAY-FIND-15: Tìm sản phẩm đầu tiên có tên bắt đầu bằng chữ iphone (không phân biệt hoa
// thường)

import { findFirstIPhone } from './ARRAY-15-FIND';

const productList1 = [];

const productList2 = [
  { id: 1, name: 'Samsung' },
  { id: 2, name: 'IPHONE X' },
  { id: 3, name: 'iPhone 12 Pro' },
];

describe('findFirstIPhone(productList)', () => {
  test('should return wrong type if parameter is not Array', () => {
    expect(findFirstIPhone('string')).toBe('wrong type');
  });
  test('should return the required student', () => {
    expect(findFirstIPhone(productList1)).toEqual(undefined);
    expect(findFirstIPhone(productList2)).toEqual({
      id: 2,
      name: 'IPHONE X',
    });
  });
});

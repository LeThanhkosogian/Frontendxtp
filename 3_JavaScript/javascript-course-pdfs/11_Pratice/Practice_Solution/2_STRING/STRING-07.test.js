// STRING-07: Thay thế params thành value tương ứng
// Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong
// object params.
import { fillPath } from './STRING-07';

describe('fillPath(pathString, paramsObj)', () => {
  test('should return a link to file', () => {
    expect(fillPath('/products/:productId', { productId: 123 })).toBe('/products/123');
    expect(
      fillPath('/categories/:categoryId/products/:productId', {
        categoryId: 1,
        productId: 2,
      })
    ).toBe('/categories/1/products/2');
    expect(fillPath('/categories/:categoryId/products/:productId', { productId: 2 })).toBe(
      '/categories/:categoryId/products/2'
    );
  });
});

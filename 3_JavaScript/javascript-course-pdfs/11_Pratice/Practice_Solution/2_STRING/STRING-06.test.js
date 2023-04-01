// STRING-06: Hiển thị địa chỉ người dùng
// Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
// chuỗi address hoàn chỉnh
// Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
// Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên
//Lưu ý: để ý dấu phẩy và khoảng trắng

import { getDisplayedAddress } from './STRING-06';

describe('getDisplayedAddress(Object)', () => {
  test('should return false if type is not Object', () => {
    expect(getDisplayedAddress(parseInt(4546464))).toEqual('');
  });
  test('should return String contain Address', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCMC',
      })
    ).toEqual('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');
    expect(
      getDisplayedAddress({
        street: 'Nguyen Cong Tru',
        district: 'Binh Thanh District',
      })
    ).toEqual('Nguyen Cong Tru, Binh Thanh District');
    expect(
      getDisplayedAddress({
        number: 123,
        city: 'HCMC',
      })
    ).toEqual('123, HCMC');
  });
});

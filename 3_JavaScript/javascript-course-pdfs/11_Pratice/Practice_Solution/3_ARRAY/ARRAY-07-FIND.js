export function findFirstEmail(array) {
  if (!Array.isArray(array)) return 'wrong type';
  array = array.filter(
    (email) =>
      email.includes('@') &&
      (email.endsWith('.com.vn') || email.endsWith('.com') || email.endsWith('.vn'))
  );
  if (array.length === 0) return undefined;
  for (let i in array) {
    let xLength = array[i].indexOf('@');
    let yLength = 0;
    if (array[i].endsWith('.com.vn')) {
      yLength = array[i].indexOf('.com.vn') - array[i].indexOf('@') - 1;
    }
    if (array[i].endsWith('.com')) {
      yLength = array[i].indexOf('.com') - array[i].indexOf('@') - 1;
    }
    if (array[i].endsWith('.vn')) {
      yLength = array[i].indexOf('.vn') - array[i].indexOf('@') - 1;
    }

    if (xLength >= 3 && yLength >= 3) return array[i];
  }
  return undefined;
}

export function findLastUrl(array) {
  if (!Array.isArray(array)) return 'wrong type';
  array = array.filter(
    (url) =>
      (url.startsWith('http') ||
        url.startsWith('https') ||
        url.startsWith('ws') ||
        url.startsWith('wss')) &&
      (url.endsWith('.com.vn') || url.endsWith('.com') || url.endsWith('.vn'))
  );
  if (array.length === 0) return undefined;
  for (let i = array.length - 1; i >= 0; i--) {
    let domainNameLength = 0;
    if (array[i].endsWith('.com') || array[i].endsWith('.com.vn')) {
      domainNameLength = array[i].indexOf('.com') - array[i].indexOf('://') - 3;
    }
    if (array[i].endsWith('.vn')) {
      domainNameLength = array[i].indexOf('.vn') - array[i].indexOf('://') - 3;
    }
    if (domainNameLength >= 3) return array[i];
  }
  return undefined;
}

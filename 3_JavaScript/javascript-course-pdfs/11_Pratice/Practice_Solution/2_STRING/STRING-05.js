export function countURLs(String) {
  if (typeof String !== 'string') return false;
  let Array = String.split(' ').filter((x) => x.includes('://'));
  let count = 0;
  for (let i = 0; i < Array.length; i++) {
    let hasAcceptableProtocol =
      Array[i].startsWith('http') ||
      Array[i].startsWith('https') ||
      Array[i].startsWith('wss') ||
      Array[i].startsWith('ws')
        ? true
        : false;
    if (hasAcceptableProtocol === false) continue;
    let hasAcceptableDomain =
      Array[i].endsWith('.com.vn') || Array[i].endsWith('.com') || Array[i].endsWith('.vn')
        ? true
        : false;
    if (hasAcceptableDomain === false) continue;
    let lengthOfNameDomain = Array[i].indexOf('.') - Array[i].lastIndexOf('/') - 1;
    if (lengthOfNameDomain >= 3) count++;
  }
  return count;
}

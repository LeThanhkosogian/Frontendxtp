export function countEmailsV1(String) {
  if (typeof String !== 'string') return false;
  let Array = String.split(' ').filter((miniString) => miniString.includes('@'));
  let count = 0;
  for (let i = 0; i < Array.length; i++) {
    Array[i] = Array[i].split('@');
    if (
      Array[i][0].length >= 3 &&
      (Array[i][1].endsWith('.com') ||
        Array[i][1].endsWith('.com.vn') ||
        Array[i][1].endsWith('.vn'))
    )
      count++;
  }
  return count;
}

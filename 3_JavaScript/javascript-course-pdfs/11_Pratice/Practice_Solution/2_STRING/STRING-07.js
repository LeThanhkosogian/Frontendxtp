export function fillPath(pathString, paramsObj) {
  for (let key in paramsObj) {
    const location = ':' + key;
    if (pathString.includes(location)) {
      pathString = pathString.replace(location, paramsObj[key]);
    }
  }
  return pathString;
}
console.log();

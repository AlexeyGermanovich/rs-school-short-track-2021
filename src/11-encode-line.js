/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let result = '';

  if (str.length === 1) {
    return str;
  }

  str.split('').forEach((item, index, arr) => {
    if (item === arr[index + 1]) {
      counter++;
    } else {
      const count = counter === 1 ? '' : counter;
      result += `${count}${item}`;
      counter = 1;
    }
  });
  return result;
}

module.exports = encodeLine;

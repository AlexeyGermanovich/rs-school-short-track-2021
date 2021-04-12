/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = [];
  const string = n.toString();

  for (let i = 0; i < string.length; i++) {
    array.push(parseInt(string.replace(string[i], ''), 10));
  }

  array.sort((a, b) => b - a);
  return array[0];
}

module.exports = deleteDigit;

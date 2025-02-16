/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const resultArr = [];
  const newArr = arr.filter((item) => item !== -1);
  newArr.sort((a, b) => a - b);

  let newi = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      resultArr.push(-1);
    } else {
      resultArr.push(newArr[newi++]);
    }
  }
  return resultArr;
}

module.exports = sortByHeight;

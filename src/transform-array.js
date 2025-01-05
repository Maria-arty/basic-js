const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  };
  const result = [];
  const final = [];
  arr.map((el) => result.push(el)) 
  console.log(result)
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === '--discard-next' ) {
      if (result[i + 1]) {
        result.splice(i + 1, 1)
      }
    }
    if (result[i] === '--discard-prev' ) {
      if (result[i - 1]) {
        final.pop();
      }
    }
    if (result[i] === '--double-next' ) {
      if (result[i + 1]) {
        result.splice(i + 1, 0, result[i + 1])
      }
    }
    if (result[i] === '--double-prev' ) {
      if (result[i - 1]) {
        final.push(result[i - 1])
      }
    } else {
      final.push(result[i])
    }
  }
  return final
}

module.exports = {
  transform
};

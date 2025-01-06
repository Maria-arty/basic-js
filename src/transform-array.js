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
  let skipNext = false;
  for (let i = 0; i < result.length; i += 1) {
    if (skipNext) {
      skipNext = false; 
      continue;
    }
    switch (result[i]) {
      case '--discard-next':
        if (i < result.length - 1) {
          skipNext = true;
        }
        break;
      case '--discard-prev':
        if (i > 0 && result[i - 2] !== '--discard-next') {
          final.pop(); 
        }
        break;
    
      case '--double-next':
        if (i < result.length - 1) {
          final.push(arr[i + 1]); 
        }
        break;
  
      case '--double-prev':
        if (i > 0 && result[i - 2] !== '--discard-next') {
          final.push(result[i - 1]); 
        }
        break;
  
      default:
        final.push(result[i]); 
      }
    }
  
    return final;
  }

module.exports = {
  transform
};

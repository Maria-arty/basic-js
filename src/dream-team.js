const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) && typeof members !== 'string') return false;
  let teamName = []
  members.map((name) => {
    if (typeof name === 'string' && name !== " ") {
      const char = name.trimStart()[0].toUpperCase();
      teamName.push(char)
    }
  });
  return teamName.length === 0 ? false : teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};

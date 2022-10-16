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
 let message = false;

function createDreamTeam(members) {
   if (Array.isArray(members)) {
      let possibleTeamName = members.reduce(function (teamName, item) {
        if (typeof(item) === 'string') {
          teamName.push(item.trim()[0].toUpperCase());
        }
        
        return teamName
      }, []);
    
      if (possibleTeamName !== []) {
        message = possibleTeamName.sort().join('');
      }
      return message;
    }
}

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))

module.exports = {
  createDreamTeam
};

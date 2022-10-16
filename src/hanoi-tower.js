const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(numberDisk, turnsSpeed) {
  
   let allTturns = Math.pow(2, numberDisk) - 1;
   let seconds = allTturns / (turnsSpeed / 3600);
   let trueSeconds = Math.floor(seconds);
   let obj = {
     turns: allTturns,
     seconds: trueSeconds,
   };

   return obj;
}

module.exports = {
  calculateHanoi
};

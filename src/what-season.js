const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
function getSeason(date) {
   let message = 'Unable to determine the time of year!';
 
   if (arguments.length > 0) {
     let month = date.getUTCMonth();
 
     
     if(month == 11 || month == 0 || month == 1){
      message = 'winter';
     } else if(month == 2 || month == 3 || month == 4){
         message = 'spring'
     }else if(month == 5 || month == 6 || month == 7){
      message = 'summer';
     } else{
      message = 'autumn';
   }
}
   return message;
 };
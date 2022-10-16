const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
   let stackT = [];
   let catsInArray;
   for (let i = 0; i < matrix.length; i++){
      for(let y = 0; y < matrix[i].length; y++){
         let indexY = matrix[i][y];
         if(indexY == '^^'){
            stackT.push(indexY);
         }

      }
   }
   catsInArray = stackT.length; 
   if (stackT.length == 0){
      return 0;
   } else{
      return catsInArray;
   }
}


module.exports = {
  countCats
};

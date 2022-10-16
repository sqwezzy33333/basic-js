const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
   calculateDepth(arr) {
     let num = 1;
 
     arr.forEach(element => {
       if (Array.isArray(element)) {
         num = Math.max(num, 1 + this.calculateDepth(element))
       }  
     });
 
     return num;
   }
 };

module.exports = {
  DepthCalculator
};

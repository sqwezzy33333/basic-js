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
   if (Array.isArray(arr) == false) {
     throw Error("arr' parameter must be an instance of the Array!");
   }
   
   let newArray = [];
   let toggle = true;
   arr.forEach(function (item, i) {
     

     if (item === '--discard-next') { 
       toggle = false;
     } else if (item === '--discard-prev') {
       newArray.pop();
     } else if (item === '--double-next') { 
       if (i < arr.length - 1) {
         newArray.push(arr[i+1]);
       }
     } else if (item === '--double-prev') { 
       if (i > 0) {
         newArray.push(arr[i-1]);
       }
     } else if (toggle) {
       newArray.push(item);
     } else {
       toggle = true;
     }
   });
 
   return newArray;
 };

module.exports = {
  transform
};

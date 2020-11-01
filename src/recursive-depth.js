const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
   if(arr.length == 0){
     return 1;
   }
  let result = 0
   arr.forEach(element =>{
     if(Array.isArray(element)){
       let newCount = this.calculateDepth(element);
       if( result < newCount){
         result = newCount;
       }
     }
   });

   return (result + 1);
  }
};
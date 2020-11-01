const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  let newArr = [];

  if(!Array.isArray(members)){
    return 0;
  }

  for (let i = 0; i < members.length; i++){
    if(typeof(members[i]) === 'string'){
      newArr.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  
  return newArr.sort().join('');

};

const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let obj = {
    turns: 0,
    seconds: 0
  }

  let newTurns = Math.pow(2,parseInt(disksNumber)) - 1;
  obj.turns = newTurns;
  let newSeconds = Math.floor(newTurns / (parseInt(turnsSpeed)/3600)); 
  obj.seconds = newSeconds;

  return obj;

};

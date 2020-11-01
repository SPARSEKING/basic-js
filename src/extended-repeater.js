const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";

  const addition = options.addition;
  let additionStr = addition !== undefined ? options.addition : "";

  let newStr = "";

  for (let i = 1; i < options.additionRepeatTimes; i++) {
      newStr = `${newStr}${additionStr}${additionSeparator}`;
  }

  newStr += additionStr;

  let result = "";

  for (let i = 1; i < options.repeatTimes; i++) {
      result = `${result}${str}${newStr}${separator}`;
  }
  result += `${str}${newStr}`;

  return result;
}
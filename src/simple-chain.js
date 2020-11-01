const CustomError = require("../extensions/custom-error");

const chainMaker = {
  methodChain: [],

  getLength() {
    return this.methodChain.length;
  },

  addLink(value) {
    this.methodChain.push(value);
    return this;
  },

  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || (position >= this.getLength())) {
      this.methodChain = [];
      throw new Error();
    }

    this.methodChain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.methodChain.reverse();
    return this;
  },

  finishChain() {
    let resultChain = this.methodChain.map( elem => `( ${elem} )`);
    this.methodChain = [];
    return resultChain.join('~~');
  }
};

module.exports = chainMaker;
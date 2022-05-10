const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = (arg1, arg2) => {
  if (eqArrays(arg1, arg2) === false) {
    assertEqual(eqArrays(arg1, arg2), true);
    return;
  }
  assertEqual(eqArrays(arg1, arg2), true);
};

module.exports = assertArraysEqual;




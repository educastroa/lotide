const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectsEqual');
const countLetters = require('./counterLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');






module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
};

// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle,
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual,
//   assertObjectEqual: assertObjectEqual,
//   countLetters: countLetters,
//   countOnly: countOnly,
//   eqArrays: eqArrays,
//   eqObjects: eqObjects,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,
//   letterPositions: letterPositions,
//   map: map,
//   takeUntil: takeUntil,
//   without: without
// };
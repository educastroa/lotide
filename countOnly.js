const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1f44e).repeat(3) + `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(String.fromCodePoint(0x1f44c).repeat(3) + `Assertion Passed: ${actual} === ${expected}`);
};

const countOnly = function (allItem, itemsToCount) {

  let result = {};

  for (let items of allItem) {
    console.log(items);
    if (itemsToCount[items]) {

      if (result[items]) {

        result[items] += 1;

      } else {

        result[items] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;
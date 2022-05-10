const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1f44e).repeat(3) + `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(String.fromCodePoint(0x1f44c).repeat(3) + `Assertion Passed: ${actual} === ${expected}`);
};


const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);

  for (let x of keys) {
    if (object[x] === value) {
      console.log(x);
      return x;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

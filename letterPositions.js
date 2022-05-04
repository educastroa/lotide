const letterPositions = function(string) {
  const results = {};
  for (let x = 0; x < string.length; x++)
  if (results[string[x]]) {
    results[string[x]].push(x);
  } else if (string[x] === ' ') {

  } else {
    results[string[x]] = [x];
  }
  return results;
};

console.log(letterPositions('eduardo de castro e assis'));



const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1f44e).repeat(3) + `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(String.fromCodePoint(0x1f44c).repeat(3) + `Assertion Passed: ${actual} === ${expected}`);
};


const eqArrays = (array1, array2) => {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};



const assertArraysEqual = (arg1, arg2) => {
  if (eqArrays(arg1, arg2) === false) {
    assertEqual(eqArrays(arg1,arg2), true);
    return
  }
  assertEqual(eqArrays(arg1,arg2), true);
}



assertArraysEqual(letterPositions('eduardo de castro e assis').a, [3, 12, 20]);
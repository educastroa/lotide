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
    assertEqual(eqArrays(arg1, arg2), true);
    return;
  }
  assertEqual(eqArrays(arg1, arg2), true);
};



const without1 = (array, element) => {
  for (let x = 0; x < element.length; x++) {

    array.splice(array.indexOf(element[x]), 1);
    console.log(element[x]);

  }


  return array;
};



const without = function (array, remove) {
  let answer = [];

  array.forEach(number => {
    if (!remove.includes(number)) {
      answer.push(number);
    }
  });

  return answer;
};

module.exports = without;

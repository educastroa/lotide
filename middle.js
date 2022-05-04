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



assertArraysEqual([1, 2, 3], [1, 2, 3]);


const middle = (array) => {

  let answer = [];

  if (array.length < 3) {
    return answer
  } else if (array.length % 2 === 0) {
    answer = array.slice((array.length / 2 -1), (array.length / 2 +1));
    
  } else if (array.length % 2 !== 0) {
    answer = array.slice(Math.floor((array.length / 2)), Math.floor((array.length / 2 +1)));
     
  }
  return answer;

};

console.log(middle([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]));

console.log(middle([1, 2, 3, 4, 5, 3, 4, 3, 4]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 4]);

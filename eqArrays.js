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
  }
  

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);


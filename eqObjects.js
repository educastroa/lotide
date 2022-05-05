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





const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;

      } for (let item of keys1) {
        
        if (Array.isArray(object1[item]) && Array.isArray(object1[item])) {
          return eqArrays(object1[item], object2[item]);
        }
        
        if (object1[item] !== object2[item]) {

      return false;
    }
  }
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false




const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


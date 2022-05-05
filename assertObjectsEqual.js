const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1f44e).repeat(3) + `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(String.fromCodePoint(0x1f44c).repeat(3) + `Assertion Passed: ${actual} === ${expected}`);
};


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



const assertObjectEqual = (arg1, arg2) => {
  if (eqObjects(arg1, arg2) === false) {
    assertEqual(eqObjects(arg1,arg2), true);
    return
  }
  assertEqual(eqObjects(arg1,arg2), true);
}

assertObjectEqual({ a: "1", b: "2" },{ a: "1", b: "2" });
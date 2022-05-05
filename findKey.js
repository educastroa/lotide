const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1f44e).repeat(3) + `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(String.fromCodePoint(0x1f44c).repeat(3) + `Assertion Passed: ${actual} === ${expected}`);
};


const findKey = (object, callback) => {
    
    for (const x in object) {
      if (callback(object[x])) {
        return x;        
      }
    }
  }
    





  // for (const x of array) {
  //   console.log(x);
  //   if (callback(x)) {
  //     console.log(callback(x))
  //     return x;
  //   }
  // }






console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));
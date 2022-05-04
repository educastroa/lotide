const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1f44e).repeat(3) + `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(String.fromCodePoint(0x1f44c).repeat(3) + `Assertion Passed: ${actual} === ${expected}`);
};

const countOnly = function(allItem, itemsToCount) {
  
  let result = {};
  
  for (let items of allItem) {
  
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





const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1f44e).repeat(3) + `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(String.fromCodePoint(0x1f44c).repeat(3) + `Assertion Passed: ${actual} === ${expected}`);
};

const tail = function(array) {
  answer = [];
  for (let x = 1; x < array.length; x++) {
    answer.push(array[x]);
  }
  return answer;
};





const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const test = [];
const test2 = ['car'];

console.log(tail(words));
console.log(tail(test));
console.log(tail(test2));

console.log(test2);



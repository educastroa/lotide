const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1f44e).repeat(3) + `Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(String.fromCodePoint(0x1f44c).repeat(3) + `Assertion Passed: ${actual} === ${expected}`);
};


const countLetters = function(string) {
  let answer = {};
  for (const x of string) {
    if (answer[x]) {
      answer[x] += 1

    } else {
      answer[x] = 1;
    }
  } return answer
}

console.log(countLetters('eduardo'));
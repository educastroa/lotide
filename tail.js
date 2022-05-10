const assertEqual = require('./assertEqual');

const tail = function (array) {
  answer = [];
  for (let x = 1; x < array.length; x++) {
    answer.push(array[x]);
  }
  return answer;
};


module.exports = tail;
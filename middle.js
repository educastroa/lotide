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

module.exports = middle;

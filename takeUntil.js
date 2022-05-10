const takeUntil = function (array, callback) {
  const answer = [];
  for (const element of array) {
    if (!callback(element)) {
      answer.push(element);

    } if (callback(element)) {
      return answer;
    }

  };

};

module.exports = takeUntil;

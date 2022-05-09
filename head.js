const assertEqual = require('./assertEqual');

// TEST CODE



const head = function(array) {
  return array[0];
  
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");



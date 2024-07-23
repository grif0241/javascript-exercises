const repeatString = function (word, repeatNumber) {
  let x = '';
  for (let i = 0; i < repeatNumber; i++) {
    x += word;
  };
  return x;
};

// Do not edit below this line
module.exports = repeatString;

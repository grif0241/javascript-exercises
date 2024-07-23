const reverseString = function (word) {
  const arrayWord = word.split("");
  const reverseWord = arrayWord.reverse().join("");
  return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;

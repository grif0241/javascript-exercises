const palindromes = function (someString) {

  // forward array
  // regex to filter out non-alphanumeric characters
  let forwardArray = someString.toLowerCase().replace(/[^a-z0-9]/g, '').split("");

  // forward string
  const newForwardStr = forwardArray.join();

  // backward array
  const reverseArray = forwardArray.reverse();

  // backward string
  const newReverseStr = reverseArray.join();

  // compare
  const isPalindrome = newForwardStr === newReverseStr;
  return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;

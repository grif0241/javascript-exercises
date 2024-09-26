const fibonacci = function (digit) {

  const fibonacciSequence = [];

  // convert string to numbers
  const num = parseInt(digit);

  // check for negative integer
  if (num < 0) {
    return "OOPS";
  }

  // check for 0th index
  if (num === 0) {
    return 0;
  }

  // create the fibonacci sequence
  for (let i = 0; i < digit; i++) {
    switch (fibonacciSequence.length) {
      case 0:
        fibonacciSequence.push(1);
        break;
      case 1:
        fibonacciSequence.push(1);
        break;
      default:
        const value = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
        fibonacciSequence.push(value)
    }
  }

  // return the desired index of the sequence
  return fibonacciSequence[digit - 1];

};


// fibonacci sequence
// 0,1,1,2,3,5,8,13,21,34,55,89
// Do not edit below this line
module.exports = fibonacci;

const sumAll = function (num1, num2) {

  // check for error cases
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 <= -1 ||
    num2 <= -1
  ) {
    return 'ERROR';
  }

  // rearrange min and max
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }

  // create list of numbers from min to max
  const numberList = [];
  for (let i = num1; i <= num2; i++) {
    numberList.push(i)
  }

  // sum the list of numbers
  let total = null;
  numberList.forEach((item) => {
    total += item;
  });

  return total;
};

// Do not edit below this line
module.exports = sumAll;

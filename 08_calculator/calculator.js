const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrayToSum) {
  const sum = arrayToSum.reduce((total, currentItem) => {
    return total += currentItem;
  }, 0);
  return sum;
};

const multiply = function (arrayToMultiply) {
  const product = arrayToMultiply.reduce((total, currentItem) => {
    return total *= currentItem;
  }, 1);
  return product;
};

const power = function (base, power) {
  const numberArray = Array(power).fill(base);
  const result = multiply(numberArray);
  return result;
};

const factorial = function (number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(number - i);
  }
  return multiply(array);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

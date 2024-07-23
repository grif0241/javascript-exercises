const removeFromArray = function (array, ...valuesToRemove) {
  const filteredArray = array.filter((item) => !valuesToRemove.includes(item));
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

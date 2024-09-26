const findTheOldest = function (people) {

  const today = new Date(); // Create a new Date object for the current date and time
  const year = today.getFullYear(); // Return the current year

  const sortedPeopleByAge = people.sort((a, b) => {

    if (((a.yearOfDeath ? a.yearOfDeath : year) - a.yearOfBirth) < ((b.yearOfDeath ? b.yearOfDeath : year) - b.yearOfBirth)) {
      return -1;
    }

    if (((a.yearOfDeath ? a.yearOfDeath : year) - a.yearOfBirth) > ((b.yearOfDeath ? b.yearOfDeath : year) - b.yearOfBirth)) {
      return 1;
    }

    return 0;
  })

  console.log(sortedPeopleByAge);
  return sortedPeopleByAge[sortedPeopleByAge.length - 1];

};

// Do not edit below this line
module.exports = findTheOldest;

// help:
// const findTheOldest = function (people) {

//   const today = new Date(); // Create a new Date object for the current date and time
//   const currentYear = today.getFullYear(); // Return the current year

//   const sortedPeopleByAge = people.sort((a, b) => {
//     const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
//     const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
//     return ageB - ageA; // descending 
//   })

//   console.log(sortedPeopleByAge);
//   return sortedPeopleByAge[0];

// };

// // Do not edit below this line
// module.exports = findTheOldest;

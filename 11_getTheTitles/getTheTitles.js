const getTheTitles = function (listOfBooks) {
  const bookTitles = listOfBooks.map((book) => {
    return book.title;
  })

  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

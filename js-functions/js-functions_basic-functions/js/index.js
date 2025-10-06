console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

const bookTitle = "The Lord of the Javascript";
const bookAuthor = "Mario";
let bookRating = 4.2;
let bookSales = 120;

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

console.log(
  "Title: " +
    bookTitle +
    "; " +
    "Author: " +
    bookAuthor +
    "; " +
    "Rating: " +
    bookRating +
    "; " +
    "Sales: " +
    bookSales +
    "; "
);

bookSales += 30;
console.log(bookSales);

bookRating -= 0.2;
console.log(bookRating);

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

function logBookData() {
  console.log(
    "Title: " +
      bookTitle +
      "; " +
      "Author: " +
      bookAuthor +
      "; " +
      "Rating: " +
      bookRating +
      "; " +
      "Sales: " +
      bookSales +
      "; "
  );
}

logBookData();

bookSales += 30;
logBookData();

bookSales += 5;
logBookData();

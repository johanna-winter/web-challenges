console.clear();

/*
EXERCISE 1
Use array destructuring to extract the variables `name`, `price`, and `quantity`.
Make sure to export your variable as shown in the example below to make the tests work.
*/

const item = ["Egg", 0.25, 12];

const [name, price, quantity] = item;
console.log(
  "Item name:",
  name,
  ", Item price:",
  price,
  ", Item quantity:",
  quantity
);

// Example: export const [ value1, value2 ] = array;

/*
EXERCISE 2
Use array destructuring to extract the variables `firstNameOfChris`, `lastNameOfChris` and `ageOfChris`.
*/

const personChris = [12, "Chris", "Owen"];
const [, firstNameOfChris, lastNameOfChris, ageOfChris = 35] = personChris;
console.log(
  "First Name:",
  firstNameOfChris,
  ", Last name:",
  lastNameOfChris,
  ", Age:",
  ageOfChris
);

/*
EXERCISE 3
Use array destructuring to extract the variables `firstNameOfAlex` and `lastNameOfAlex`.
Ensure no unused variables remain.
*/

const personAlex = ["Alex", 12, "Main"];
const [firstNameOfAlex, , lastNameOfAlex] = personAlex;
console.log(firstNameOfAlex, lastNameOfAlex, personAlex);

/*
EXERCISE 4
Use array destructuring to extract the last name from the array
as variable called `lastName`.
*/

const students = ["Christina", "Jon", "Alexandare"];
const [, , lastName] = students;
console.log("Last name from array: ", lastName);

/*
EXERCISE 5
Use array destructuring to extract all names from the nested array `nestedStudents`.
Assign each name to a variable called "student1" through "student5", in the given order.
*/

const nestedStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];
const [student1, [student2, student3], [student4, student5]] = nestedStudents;
console.log(
  student1,
  ",",
  student2,
  ",",
  student3,
  ",",
  student4,
  ",",
  student5
);

/*
EXERCISE 6
Spread the values of the `values` array into the function call of the `add` function.
Keep in mind that you need to export the variable `result` to make the test work.
*/

const values = [1, 6, 7, 9, 12, 5, 4];

export const result = add(...values); // Spread values inside this function call

function add(...values) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}
console.log(add(...values));

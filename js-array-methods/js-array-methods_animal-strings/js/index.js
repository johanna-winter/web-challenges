console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");
console.log("Does the hippo exist? ", hippoExists);

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
console.log("Is there a cat after index 5? ", catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.startsWith("p")
);
console.log(
  "Which animal is the first one to start with the letter P?",
  firstAnimalStartingWithLetterP
);

const indexOfGiraffe = animalStrings.indexOf("giraffe");
console.log("What is the index of Giraffe?", indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// That's why we use toSorted()
const animalsSortedAlphabetically = animalStrings.toSorted((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  else return 0;
});
console.log("Animals in alphabetical order:", animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) =>
  animal.endsWith("z")
);
console.log("Animals that end with the letter Z:", anyAnimalEndsWithLetterZ);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);
console.log(
  "Animals with more than two letters:",
  everyAnimalHasMoreThanTwoLetters
);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)
const sumOfAllAnimalCharacters = animalStrings.reduce(
  (sum, item) => sum + item,
  0
);
console.log("Sum of all animal characters:", sumOfAllAnimalCharacters.length);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};

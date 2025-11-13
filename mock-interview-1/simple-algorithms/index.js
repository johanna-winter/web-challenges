// 1. Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log("Maximum of two numbers: ", maxOfTwoNumbers(8, 20));

/*
Dry run:
0 - Visit every single number -> we only have two
1 - So I can just say IF num1 is bigger than num2, return the bigger number which would be num1
2 - I won't need to compare it to other numbers because there are only two in total (no else needed)
*/

// 2. Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  let longest = "";
  for (i = 0; i < words.length; i++) {
    let current = words[i];
    if (current.length > longest.length) {
      longest = current;
    }
    console.log(current.length);
  }
  return longest;
}
console.log("Longest word: ", findLongestWord(words));

/* dry run
0 - Start with let longest = ""
1 - I will visit every single word in the array [index 0-5]
2 - I will use the length property to see how long the word is
3 - I will compare the length of the current word against the length of the longest variable
4 - If the length of the current word is LONGER than the length of the longest, then update the longest word to equal the current word
5 - When there is no more words, return the longest variable
*/

// 3. Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  // start with a sum of 0
  let sum = 0;
  // visit every number of the array, starting with index 0
  // keep the loop running incrementing one as long as the index is less than the array length,
  for (let i = 0; i < numbers.length; i++) {
    // add the current number of the loop to running total
    sum += numbers[i];
  }
  return sum;
}
// print the result to the console
console.log("Sum of all numbers: ", sumNumbers(numbers));

// 4. Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  let totalWordLength = 0;
  for (let i = 0; i < words.length; i++) {
    totalWordLength += words[i].length;
  }
  // TODO:
  // 1 - find out how long each word is (e.g. words2[0].length)
  // 2 - add the lengths of all words together
  // 3 - divide by the number of words (10)
  return totalWordLength / words.length;
}

console.log("Average word length: ", averageWordLength(words2));

// 5. Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  // start with an empty array
  let uniqueWords = [];
  // loop over words, only add to new array if it doesn't already include the word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }
  // return the new array at the end
  return uniqueWords;
}

console.log(uniquifyArray(words3));

// 6. Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  // 1. if array empty, return null or false
  if (haystack.length === 0) return null;
  // 2. loop through haystack, check each element
  for (let i = 0; i < haystack.length; i++) {
    // 3. get the current word
    let word = haystack[i];
    // 4. return true if match
    if (word === needle) {
      return true;
    }
  }
  // 5. return false if none
  return false;
  // TODO: check if a specific word (needle) is in the array (haystack)
  // return haystack.includes(needle);
}
console.log("Does this word exist? ", doesWordExist(wordsFind, "starting"));

// 7. Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  // start with count = 0
  let count = 0;
  // loop through the array
  for (let i = 0; i < haystack.length; i++) {
    let currentWord = haystack[i];
    // if the current word equals needle, increment the counter
    if (currentWord === needle) {
      count += 1;
    }
  }
  return count;
  // TODO:
}

console.log(
  "How many times is the word matter in the array? ",
  howManyTimes(wordsCount, "matter")
);

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  // start total at 0
  let total = 0;
  // loop through every element in the array
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (typeof item === "number") {
      // handle number, add it directly to total
      total += item;
    } else if (typeof item === "string") {
      // handle string, add its length to total
      total += item.length;
    } else if (typeof item === "boolean") {
      // handle boolean, add 1 if true, 0 if false
      total += item ? 1 : 0;
    }
  }
  return total;
}

console.log("This is the sum of the mixedArray: ", sum(mixedArray));

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  let maxProduct = 0;
  // outer loop: vertical rows
  for (let i = 0; i < matrix.length; i++) {
    // inner loop: horizontal columns
    for (let j = 0; j < matrix[i].length; j++) {
      // loggin row index, column index, then checking the value at that row/column position
      console.log(i, j, matrix[i][j]);
      // For each number, multiply the 4 numbers in a row (if possible)
      // If the current column index (j) is less than or equal to the total number of columns in this row minus 4,
      // then I have enough space to look at 4 numbers horizontally.
      if (j <= matrix[i].length - 4) {
        const product =
          matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        console.log("product of 4 horizontal numbers: ", product);
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
      // and the 4 numbers in a column (if possible).
      // Compare both results to the current max — keep the largest.
      if (i <= matrix.length - 4) {
        const product =
          matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        console.log("product of 4 vertical numbers: ", product);
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
    }
  }
  return maxProduct;
  // TODO: loop through every sub array inside matrix (horizontally), start with index 0 for as long as matrix.length &
  // make use of the previously declared index i to check matrix[i].length for each column -> nested for loop
}

console.log("Greatest product: ", greatestProduct(matrix));

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};

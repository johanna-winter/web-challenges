console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

console.log("Get Current Hour: " + getCurrentHour());

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

console.log("Get Vector Length: " + getVectorLength(1, 4, 13));

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};

console.log("Clean Input: " + cleanInput("    Hello hello hello!    "));

/*
Rewrite the following arrow functions as classic functions.
*/

// const isOddAndSmall = (number) => {
//   if (number > 10) {
//     return false;
//   }

//   if (number % 2 === 0) {
//     return false;
//   }

//   return true;
// };

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  return true;
}

console.log("This is an odd and small number: " + isOddAndSmall(13));

// const add3 = (a, b, c) => a + b + c;

function add3(a, b, c) {
  return a + b + c;
}

console.log("Add 3 together: " + add3(2, 28, 94));

// const repeat10 = (string) => string.repeat(10);

function repeat10(string) {
  return string.repeat(10);
}

console.log("Repeat 10 times: " + repeat10("string"));

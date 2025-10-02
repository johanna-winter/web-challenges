console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "987654321!";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("This is an even number.");
} else {
  console.log("This is an uneven number.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000001;

if (numberOfHotdogs < 5) {
  console.log("2 EUR per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50 EUR per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 EUR per hotdog");
} else {
  console.log("0.10 EUR per hotdog");
}

// Part 4: Daytime
const currentHour = 19;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Felix" ? "Coach" : userName) + "!";

console.log(greeting);

console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const getHour = new Date().getHours();

  if (getHour >= 6 && getHour <= 12) {
    return "Good morning";
  } else if (getHour >= 13 && getHour <= 18) {
    return "Good afternoon";
  } else if (getHour >= 19 && getHour <= 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

function getDayColor() {
  const getWeekday = new Date().getDay;
  if (getWeekday === "Monday") {
    return "darkgray";
  } else if ((getWeekday === "Tuesday", "Wednesdays", "Thursday")) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();

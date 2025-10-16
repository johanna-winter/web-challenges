console.clear();
import { getRandomColor } from "./utils/randomColor.js";

const root = document.getElementById("root");

function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}

Circle();
const circleElement = Circle();

function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}

Square();
const squareElement = Square();

function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
}

Pentagon();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);

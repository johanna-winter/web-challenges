export function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
console.log(add(6, -9));
console.log(add(0.1, 0.2));

export function subtract(a, b) {
  return a - b;
}
console.log(subtract(15, 5));
console.log(subtract(10, 20));

export function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 4));
console.log(multiply(-2, 5));
console.log(multiply(2, -5));
console.log(multiply(-3, -4));

export function divide(a, b) {
  if (b === 0) {
    return "You should not do this!";
  }

  return a / b;
}
console.log(divide(9, 3));
console.log(divide(3, 0));

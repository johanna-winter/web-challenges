console.clear();

// Assign elements to variables
const firstInput = document.querySelector('[data-js="first-input"]');
const buttonUppercase = document.querySelector('[data-js="button-uppercase"]');

console.log(firstInput);
console.log(buttonUppercase);

// Add an event listener to button
buttonUppercase.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.classList.add("toast-container__message");
  li.textContent = "I'm a toast message.";
  toastContainer.append(li);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  const removeMessage = document.querySelector('[data-js="toast-container"]');
  removeMessage.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});

console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successElement = document.querySelector('[data-js="success"]');

function hideSuccessMessage() {
  successElement.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successElement.removeAttribute("hidden");
}

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

hideSuccessMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tosCheckbox.checked) {
    showTosError();
    hideSuccessMessage();
    return;
  }

  hideTosError();
  showSuccessMessage();
  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

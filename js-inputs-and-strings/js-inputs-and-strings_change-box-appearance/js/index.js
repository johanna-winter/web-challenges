console.clear();

const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

colorInput.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${colorInput.value} 100% 50%)`;
});

radiusInput.addEventListener("input", () => {
  const radius = radiusInput.value;
  box.style.borderRadius = `${radius}px`;
});

rotationInput.addEventListener("input", () => {
  const deg = rotationInput.value;
  box.style.transform = `rotate(${deg}deg)`;
});

console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollYPosition = window.scrollY;
  const innerHeight = window.innerHeight;
  const webpageHeight = document.body.clientHeight;
  return (scrollYPosition / (webpageHeight - innerHeight)) * 100;
}

document.addEventListener("scroll", () => {
  const scrollPosition = calculateScrollPercentage();
  progressBar.style.width = `${scrollPosition}%`;
});

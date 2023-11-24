'use strict';

const colors = [`green`, `red`, `rgba(133, 122, 200)`, `#f15025`];
const button = document.getElementById(`--btn`);
const color = document.querySelector('.color-code');

// Generating random number between `colors` array
function getRandomNumber() {
  return Math.trunc(Math.random() * colors.length);
}

button.addEventListener(`click`, () => {
  const randomNumber = getRandomNumber();

  document.querySelector(`main`).style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

'use strict';

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `a`, `b`, `c`, `d`, `e`, `f`];
const button = document.getElementById('--btn');
const color = document.querySelector('.color-code');

function getRandomNumber() {
  return Math.trunc(Math.random() * hexColors.length);
}

button.addEventListener(`click`, () => {
  let hexValue = `#`;

  for (let i = 0; i < 6; i++) {
    hexValue += hexColors[getRandomNumber()];
  }

  document.querySelector(`main`).style.background = hexValue;
  document.querySelector(`.color-code`).style.color = hexValue;
  color.textContent = hexValue;
});

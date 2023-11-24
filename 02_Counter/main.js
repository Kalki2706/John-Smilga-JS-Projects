'use strict';

let count = 0;

const value = document.querySelector(`.value`);
const buttons = document.querySelectorAll('.--btn');

buttons.forEach((button) => {
  button.addEventListener(`click`, function (e) {
    const styles = e.currentTarget.classList;

    // Button click events
    if (styles.contains(`decrease`)) {
      count--;
    } else if (styles.contains(`increase`)) {
      count++;
    } else {
      count = 0;
    }

    // Color Change
    if (count > 0) {
      value.style.color = `green`;
    } else if (count < 0) {
      value.style.color = `red`;
    } else if (count === 0) {
      value.style.color = `cornflowerblue`;
    }

    value.textContent = count;
  });
});

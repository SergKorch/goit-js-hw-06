function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const form = document.querySelector("body");

const btn = document.querySelector(".change-color");
const span = document.querySelector("span");

btn.addEventListener("click", getHexColor);
function getHexColor () {
form.style.backgroundColor = getRandomHexColor();
span.textContent=form.style.backgroundColor
console.log(getRandomHexColor());
}
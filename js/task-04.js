const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
const btnClickDec = event => {
  value.textContent = counterValue += 1;
};
const btnClickInc = event => {
  value.textContent = counterValue -= 1;
};
btnDec.addEventListener('click', btnClickDec);
btnInc.addEventListener('click', btnClickInc);

// const btns = document.querySelectorAll(".counter_btn");
// let currentValue = 0;
// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     const action = this.dataset.action;
//     const span = this.parentElement.querySelector("#value");
//    currentValue = +span.textContent;
//     let newValue;
//     if (action === "increment") {
//       newValue = currentValue + 1;
//     } else {
//       newValue = currentValue - 1;
//     }
//     span.textContent = newValue;
//   });
// });

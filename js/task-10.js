// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const divSection = document.querySelector('#boxes');
// const divElAll=[];

// function addDiv ()  {
// const divEl=document.createElement("div");
// console.log(divEl);
// divElAll.push(divEl);
// }

// const button = document.querySelector(".btn");

// console.log(divSection);
// divSection.append(...divElAll)

// const  createBoxes = amount => {

// };
const btns = document.querySelectorAll("button");
console.log(...btns);
// let currentValue = 0;
btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const action = this.dataset.action;
  //     const span = this.parentElement.querySelector("#value");
  //    currentValue = +span.textContent;
  //     let newValue;
  if (action === "create") {
    const divEl = document.createElement("div");
    console.log(divEl);
    divElAll.push(divEl);
  } else if ((action === "destroy")) {
        divElAll.remove();
  }
  //     span.textContent = newValue;
});
// });

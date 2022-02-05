const btns = document.querySelectorAll(".counter_btn");
let currentValue = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const action = this.dataset.action;
    const span = this.parentElement.querySelector("#value");
   currentValue = +span.textContent;
    let newValue;
    if (action === "increment") {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1;
    }
    span.textContent = newValue;
  });
});

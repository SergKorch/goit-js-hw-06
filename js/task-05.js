const inp = document.querySelector("#name-input");

console.log(inp);

const span = document.querySelector("#name-output");

console.log(span.textContent);

inp.addEventListener("input", (event) => {
  if (inp.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.currentTarget.value;
  }
});

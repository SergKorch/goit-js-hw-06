const inp = document.getElementById("font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = inp.value + "px";
inp.addEventListener("input", inpMove);
function inpMove(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}

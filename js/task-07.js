const inp = document.getElementById("font-size-control");

const span = document.querySelector("#text");

inp.addEventListener("input", inpMove);
function inpMove(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}

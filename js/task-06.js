const inp = document.getElementById("validation-input");
console.log(inp);

inp.onblur = function () {
  if (this.getAttribute("data-length") > this.value.length) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
};

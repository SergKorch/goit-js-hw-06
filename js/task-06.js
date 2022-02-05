const inpEl = document.querySelector('input') ;
console.log(inpEl)

inpEl.addEventListener('blur', event =>{
  if (event.currentTarget.value.length == inpEl.dataset.length) {
    inpEl.classList.add("valid");
    inpEl.classList.remove("invalid");
  } else {
    inpEl.classList.add("invalid");
    inpEl.classList.remove("valid");
  }
});

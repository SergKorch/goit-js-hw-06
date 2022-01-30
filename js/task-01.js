const numberLi = document.querySelector("#categories");
const categories = numberLi.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);
categories.forEach((categEl) => {
  console.log("Category:", categEl.querySelector("h2").textContent);
  console.log("Elements:", categEl.querySelectorAll("li").length);
});

// magicBtn.addEventListener('click', ()=>{

// });

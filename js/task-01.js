const numberLi = document.querySelector("#categories");
const numberLib = document.querySelectorAll("ul>li");

console.log("Category:", numberLi.textContent); //save

const categories = document.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

const elements = document.querySelectorAll("li.item>ul");
elements.forEach((dish) => {
    console.log("Elements11:", dish.firstChild.length);
  
  });

const matches = document.querySelectorAll("li.item>h2");
matches.forEach((dish) => {
  console.log("Category:", dish.textContent);
  console.log("Elements:", dish.firstChild.length);

});


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
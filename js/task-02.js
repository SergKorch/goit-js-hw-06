const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl=document.querySelector('#ingredients');
 ingredients.forEach((ingredient) => {
const liEl = document.createElement('li');
liEl.textContent=ingredient;
liEl.classList.add('item');
ulEl.append(liEl);
})

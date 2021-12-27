const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("ul#ingredients");

const liElements = ingredients.map(ingredient => {
  const liEl =  document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
})
console.log(liElements)
ulRef.append(...liElements)
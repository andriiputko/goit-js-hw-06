const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const listEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

ingredientsEl.append(...listEl);


// const ingredientsEl = document.querySelector("#ingredients")
// ingredients.forEach(element => 
//   {const listEl = document.createElement("li"); 
//   listEl.classList.add("item"); 
//   listEl.append(element); 
//   console.log(listEl)
//   ingredientsEl.insertAdjacentElement("beforeend", listEl)
//   })


  



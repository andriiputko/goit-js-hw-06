const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);
listEl.forEach(element => {console.log(`Category: ${element.firstElementChild.innerHTML} 
Elements: ${element.lastElementChild.childElementCount}`)});
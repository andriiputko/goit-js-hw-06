function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  
  for(let i = 0; i < amount; i++) {
    let div = document.createElement("div")
    div.style.backgroundColor = getRandomHexColor();
    let size = 30; size +=10 * i
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    
    
    mainDiv.append(div)
  }
  console.log(inputData.value)
}

function destroyBoxes() {
  inputData.value = '';
  mainDiv.innerHTML = '';
}

const inputData = document.querySelector("#controls").firstElementChild;
const mainDiv = document.querySelector("#boxes")

const createBtn = document.querySelector("[data-create]");
createBtn.addEventListener("click", () => {createBoxes(inputData.value)});

const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes)
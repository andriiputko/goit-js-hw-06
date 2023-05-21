function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.body;
button.addEventListener("click", bodyChangeColor);

function bodyChangeColor(evt){
  body.style.backgroundColor = getRandomHexColor();
  document.querySelector(".color").innerHTML = getRandomHexColor()
}
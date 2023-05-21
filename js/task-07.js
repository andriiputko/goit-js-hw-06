const slider = document.querySelector("#font-size-control");
slider.addEventListener("input", () => {let size = slider.value; 
document.querySelector("#text").style.fontSize = size + "px"})
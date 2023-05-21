let counterValue = 0;
const buttonDown = document.querySelector(`[data-action="decrement"]`)
const buttonUp = document.querySelector(`[data-action="increment"]`);

buttonDown.addEventListener("click", () => {counterValue-=1; document.querySelector("#value").innerHTML = counterValue;})
buttonUp.addEventListener("click", () => {counterValue += 1; document.querySelector("#value").innerHTML = counterValue;});
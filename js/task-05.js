const textInput = document.querySelector("#name-input")
let nameOut = document.querySelector("#name-output")
textInput.addEventListener("input", (evt) => {nameOut.textContent = evt.currentTarget.value; 
    const value = textInput.value; if(!value) {nameOut.innerHTML = 'Anonymous'}} )

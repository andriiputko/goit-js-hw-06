const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", inputBorderColor)

function inputBorderColor(event) {
    const inputDataLength = Number(inputEl.dataset.length);
    const inputLength = Number(inputEl.value.trim().length);
    if(inputLength === inputDataLength) {inputEl.classList.add("valid"); inputEl.classList.remove("invalid")} 
    else {inputEl.classList.remove("valid"); inputEl.classList.add("invalid")}
}
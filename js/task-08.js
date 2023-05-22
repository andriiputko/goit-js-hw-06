const form = document.querySelector(".login-form");
form.addEventListener("submit", submitFunction);

function submitFunction(evt) {
    evt.preventDefault();
    const {email, password} = evt.currentTarget.elements;

    if(email.value === "" || password.value === "") {
        return alert("Please, fill in all fields");
    } else {
        const dataValue = { email: email.value, password: password.value};
        console.log(dataValue);
    }
    
    evt.currentTarget.reset();
}



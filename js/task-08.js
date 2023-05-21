const form = document.querySelector(".login-form");
form.addEventListener("submit", submitFunction);

function submitFunction(evt) {
    evt.preventDefault();
    let {elements:  {email, password}} = evt.currentTarget;

    if(email.value === "" || password.value === "") {
        return alert("Please, fill in all fields")
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    evt.currentTarget.reset();
}




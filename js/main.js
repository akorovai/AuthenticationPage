let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');


function validateInput(input, errorElement, errorMessage) {
    const value = input.value.trim();
    if (value.length < 2 || value.length > 60 || /^\s*$/.test(value)) {
        errorElement.textContent = errorMessage;
        return false;
    }
    errorElement.textContent = "";
    return true;
}

function validateEmail(email, errorElement) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorElement.textContent = "Nieprawidłowy adres e-mail.";
        return false;
    }
    errorElement.textContent = "";
    return true;
}

signinBtn.onclick = () => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign in';
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable")

}

signupBtn.onclick = (event) => {
    nameField.style.maxHeight = "65px";
    title.innerHTML = 'Sign up';
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");

}












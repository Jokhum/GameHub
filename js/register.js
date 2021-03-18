/* FORM */

const form = document.querySelector("#registrationForm");
const loginForm = document.querySelector("#loginForm")
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password")
const username = document.querySelector("#username")
const successMsg = document.querySelector("#success-form")

// Form Function

function validateRegistration(event) {

    event.preventDefault();

    // Validate FullName length 
    if (checkLength(fullName.value, 6) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    // Validate Phone length

    if (checkLength(phone.value, 9) === true) {
        phoneError.sdresstyle.display = "none";
    } else {
        phoneError.style.display = "block";
    }
    
    // Validate e-mail format

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}



form.addEventListener("submit", validateRegistration);

// Login Validation Function

function validateLogin(event) {

    event.preventDefault();

    // Validate Username length 
    if (checkLength(username.value, 6) === true) {
        usernameError.style.display = "none";
    } else {
        usernameError.style.display = "block";
    }

    // Validate Password length

    if (checkLength(password.value, 8) === true) {
        passwordError.sdresstyle.display = "none";
    } else {
        passwordError.style.display = "block";
    }
    
}

loginForm.addEventListener("submit", validateLogin);



// Length Validation Function

function checkLength(value, length) {
    
    if(value.trim().length >= length) {
        return true;
    } else {
        return false;
    }
}

// E-mail Validation Function

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const characterMatch = regEx.test(email);
    return characterMatch;
}
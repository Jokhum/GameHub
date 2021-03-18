/* FORM */

const form = document.querySelector("#registration-form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const successMsg = document.querySelector("#success-form")

// Form Function

function validateRegistration(event) {

    event.preventDefault();

    // Validate FullName length 
    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    // Validate Adress length

    if (checkLength(phone.value, 10) === true) {
        adressError.sdresstyle.display = "none";
    } else {
        adressError.style.display = "block";
    }

    // Validate Subject length

    if (checkLength(userName.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    // Validate Username Length

    if (checkLength(userName.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    
    
    // Validate Password Length

    if (checkLength(userName.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    

    // Validate e-mail format

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}



form.addEventListener("submit", validateRegistration);

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
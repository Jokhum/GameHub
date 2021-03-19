/* FORM */

const form = document.querySelector("#registrationForm");
const loginForm = document.querySelector("#loginForm")
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password")
const username = document.querySelector("#username")

// Form Function

function validateRegistration(event) {

    event.preventDefault();

    // Validate FullName length 
    if (checkLength(fullName.value, 6)) {

        fullNameError.style.display = "none";

    } else {

        fullNameError.style.display = "block";
    }

    // Validate Phone length

    if (phoneNumber(phone.value)) {

        phoneError.style.display = "none";

    } else {

        phoneError.style.display = "block";

    }
    
    // Validate e-mail format

    if (validateEmail(email.value)) {

        emailError.style.display = "none";
  
    } else {

        emailError.style.display = "block";

    }

    if (checkLength(fullName.value, 6) && phoneNumber(phone.value) && validateEmail(email.value)) {
        document.location.href = "./regcomplete.html";
    }
}

form.addEventListener("submit", validateRegistration);

// Login Validation Function

function validateLogin(event) {

    event.preventDefault();

    // Validate Username length 
    if (checkLength(username.value, 6)) {

        usernameError.style.display = "none";

    } else {

        usernameError.style.display = "block";

    }

    // Validate Password length

    if (checkLength(password.value, 8)) {

        passwordError.style.display = "none";

    } else {

        passwordError.style.display = "block";

    }
    
    if (checkLength(username.value, 6) && checkLength(password.value, 8)) {

        document.location.href = "./mypage.html";
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

// Phonenumber Validation Function 

function phoneNumber(input) {

    const number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})$/;

    const characterMatch = number.test(input);

    return characterMatch;

}
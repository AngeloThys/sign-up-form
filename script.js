// All conditions start unmet
let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let phoneNumberValid = false;
let passwordValid = false;
let passwordConfirmValid = false;

// Only letters are allowed in the name
const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const firstNameInput = document.querySelector("#firstName");
const firstNameInfo = document.querySelector(".input-info-firstName");
function firstNameCheck() {
    if (firstNameInput.value.match(namePattern)) {
        firstNameInput.style.outline = '3px solid forestgreen';
        firstNameInfo.innerHTML = `<span class="material-symbols-outlined">done</span>
                                   <p>What a beautiful name!</p>`;
        firstNameInfo.style.color = 'forestgreen';
        firstNameValid = true;
    } else {
        firstNameInput.style.outline = '3px solid crimson';
        firstNameInfo.textContent = 'A name should consist of letters only.';
        firstNameInfo.innerHTML = `<span class="material-symbols-outlined">close</span>
                                   <p>A name should consist of letters only.</p>`;
        firstNameInfo.style.color = 'crimson';
        firstNameValid = false;
    }
}
firstNameInput.addEventListener('keyup', firstNameCheck);

const lastNameInput = document.querySelector("#lastName");
const lastNameInfo = document.querySelector(".input-info-lastName");
function lastNameCheck() {
    if (lastNameInput.value.match(namePattern)) {
        lastNameInput.style.outline = '3px solid forestgreen';
        lastNameInfo.innerHTML = `<span class="material-symbols-outlined">done</span>
                                  <p>Perfect!</p>`;
        lastNameInfo.style.color = 'forestgreen';
        lastNameValid = true;
    } else {
        lastNameInput.style.outline = '3px solid crimson';
        lastNameInfo.innerHTML = `<span class="material-symbols-outlined">close</span>
                                  <p>A name should consist of letters only.</p>`;
        lastNameInfo.style.color = 'crimson';
        lastNameValid = false;
    }
}
lastNameInput.addEventListener('keyup', lastNameCheck);

// HTML standard email validation
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const emailInput = document.querySelector("#email");
const emailInfo = document.querySelector(".input-info-email");
function emailCheck() {
    if (emailInput.value.match(emailPattern)) {
        emailInput.style.outline = '3px solid forestgreen';
        emailInfo.style.color = 'forestgreen';
        emailInfo.innerHTML = `<span class="material-symbols-outlined">done</span>
                               <p>The email format is correct!</p>`;
        emailValid = true;
    } else {
        emailInput.style.outline = '3px solid crimson';
        emailInfo.style.color = 'crimson';
        emailInfo.innerHTML = `<span class="material-symbols-outlined">close</span>
                               <p>Try something with an @.</p>`;
        emailValid = false;
    }
}
emailInput.addEventListener('keyup', emailCheck);

const phoneNumberPattern = /^\d{9,12}$/;
const phoneNumberInput = document.querySelector("#phoneNumber");
const phoneNumberInfo = document.querySelector(".input-info-phoneNumber");
function phoneNumberCheck() {
    if (phoneNumberInput.value.match(phoneNumberPattern)) {
        phoneNumberInput.style.outline = '3px solid forestgreen';
        phoneNumberInfo.style.color = 'forestgreen';
        phoneNumberInfo.innerHTML = `<span class="material-symbols-outlined">done</span>
                                     <p>The phone number format is correct!</p>`;
        phoneNumberValid = true;
    } else {
        phoneNumberInput.style.outline = '3px solid crimson';
        phoneNumberInfo.style.color = 'crimson';
        phoneNumberInfo.innerHTML = `<span class="material-symbols-outlined">close</span>
                                     <p>A phone number should be 9 to 12 numbers, no spaces.</p>`;
        phoneNumberValid = false;
    }
}
phoneNumberInput.addEventListener('keyup', phoneNumberCheck);

const passwordInput = document.querySelector("#password");
const passwordInfo = document.querySelector(".input-info-password");
function passwordCheck() {
    const characterAmount = document.querySelector("#characterAmount");
    if (passwordInput.value.length > 12) {
        characterAmount.style.color = 'forestgreen';
    } else {
        characterAmount.style.color = '';
    }

    const characterLowercase = document.querySelector("#characterLowercase");
    const lowercaseRegex = /[a-z]/;
    if (lowercaseRegex.test(passwordInput.value)) {
        characterLowercase.style.color = 'forestgreen';
    } else {
        characterLowercase.style.color = '';
    }

    const characterUppercase = document.querySelector("#characterUppercase");
    const uppercaseRegex = /[A-Z]/;
    if (uppercaseRegex.test(passwordInput.value)) {
        characterUppercase.style.color = 'forestgreen';
    } else {
        characterUppercase.style.color = '';
    }

    const characterNumber = document.querySelector("#characterNumber");
    const numberRegex = /[0-9]/;
    if (numberRegex.test(passwordInput.value)) {
        characterNumber.style.color = 'forestgreen';
    } else {
        characterNumber.style.color = '';
    }

    const characterSpecial = document.querySelector("#characterSpecial");
    const specialRegex = /[!@#$%^&*()_+\-=/?.,<>[\]{}'"´¨;:]/;
    if (specialRegex.test(passwordInput.value)) {
        characterSpecial.style.color = 'forestgreen';
    } else {
        characterSpecial.style.color = '';
    }

    if (passwordInput.value.length > 12
        && lowercaseRegex.test(passwordInput.value)
        && uppercaseRegex.test(passwordInput.value)
        && numberRegex.test(passwordInput.value)
        && specialRegex.test(passwordInput.value)) {
        passwordInput.style.outline = '3px solid forestgreen';
        passwordInfo.style.color = 'forestgreen';
        passwordInfo.innerHTML = `<span class="material-symbols-outlined">done</span>
                                  <p>All conditions are being met!</p>`;
        passwordValid = true;
    } else {
        passwordInput.style.outline = '3px solid crimson';
        passwordInfo.style.color = 'crimson';
        passwordInfo.innerHTML = `<span class="material-symbols-outlined">close</span>
                                  <p>Check the password conditions on the right.</p>`;
        passwordValid = false;
    }
}
passwordInput.addEventListener('keyup', passwordCheck);

const passwordConfirmInput = document.querySelector("#passwordConfirm");
const passwordConfirmInfo = document.querySelector(".input-info-passwordConfirm");
function passwordConfirmCheck() {
    if (passwordConfirmInput.value === passwordInput.value) {
        passwordConfirmInput.style.outline = '3px solid forestgreen';
        passwordConfirmInfo.style.color = 'forestgreen';
        passwordConfirmInfo.innerHTML = `<span class="material-symbols-outlined">done</span>
                                         <p>The passwords match!</p>`;
        passwordConfirmValid = true;
    } else {
        passwordConfirmInput.style.outline = '3px solid crimson';
        passwordConfirmInfo.style.color = 'crimson';
        passwordConfirmInfo.innerHTML = `<span class="material-symbols-outlined">close</span>
                                         <p>The passwords do not match.</p>`;
        passwordConfirmValid = false;
    }
}
passwordConfirmInput.addEventListener('keyup', passwordConfirmCheck);

const signupForm = document.querySelector("#signup");
const signupFormButton = document.querySelector("#signup-button");
signupFormButton.addEventListener('click', () => {
    if (firstNameValid
        && lastNameValid
        && emailValid
        && phoneNumberValid
        && passwordValid
        && passwordConfirmValid) {
        signupForm.submit();
        console.log('sent');
    } else {
        firstNameCheck();
        lastNameCheck();
        emailCheck();
        phoneNumberCheck();
        passwordCheck();
        passwordConfirmCheck();
    }
});
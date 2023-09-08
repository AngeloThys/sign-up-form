// Only letters are allowed in the name
const namePattern = /^[A-Za-z]+$/;

const firstNameInput = document.querySelector("#firstName");

const firstNameInfo = document.querySelector(".input-info-firstName");

firstNameInput.addEventListener('keyup', () => {
    if (firstNameInput.value.match(namePattern)) {
        firstNameInput.style.outline = '3px solid forestgreen';
        firstNameInfo.textContent = 'Perfect!';
        firstNameInfo.style.color = 'forestgreen';
    } else {
        firstNameInput.style.outline = '3px solid crimson';
        firstNameInfo.textContent = 'A name should consist of letters only.';
        firstNameInfo.style.color = 'crimson';
    }
});

const lastNameInput = document.querySelector("#lastName");

const lastNameInfo = document.querySelector(".input-info-lastName");

lastNameInput.addEventListener('keyup', () => {
    if (lastNameInput.value.match(namePattern)) {
        lastNameInput.style.outline = '3px solid forestgreen';
        lastNameInfo.textContent = 'Perfect!';
        lastNameInfo.style.color = 'forestgreen';
    } else {
        lastNameInput.style.outline = '3px solid crimson';
        lastNameInfo.textContent = 'A name should consist of letters only.';
        lastNameInfo.style.color = 'crimson';
    }
});

// HTML standard email validation
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const emailInput = document.querySelector("#email");

const emailInfo = document.querySelector(".input-info-email");

emailInput.addEventListener('keyup', () => {
    if (emailInput.value.match(emailPattern)) {
        emailInput.style.outline = '3px solid forestgreen';
        emailInfo.style.color = 'forestgreen';
        emailInfo.textContent = 'Perfect!';
    } else {
        emailInput.style.outline = '3px solid crimson';
        emailInfo.style.color = 'crimson';
        emailInfo.textContent = 'Try something with an @.';
    }
});

const phoneNumberPattern = /^\d{9,12}$/;

const phoneNumberInput = document.querySelector("#phoneNumber");

const phoneNumberInfo = document.querySelector(".input-info-phoneNumber");

phoneNumberInput.addEventListener('keyup', () => {
    if (phoneNumberInput.value.match(phoneNumberPattern)) {
        phoneNumberInput.style.outline = '3px solid forestgreen';
        phoneNumberInfo.style.color = 'forestgreen';
        phoneNumberInfo.textContent = 'Perfect!';
    } else {
        phoneNumberInput.style.outline = '3px solid crimson';
        phoneNumberInfo.style.color = 'crimson';
        phoneNumberInfo.textContent = 'A phone number should be 9 to 12 numbers, no spaces.';
    }
});

const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#passwordConfirm");

const passwordInfo = document.querySelector(".input-info-password");
const passwordConfirmInfo = document.querySelector(".input-info-passwordConfirm");


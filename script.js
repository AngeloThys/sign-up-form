// Only letters are allowed in the name
const namePattern = /^[A-Za-z]+$/;
const firstNameInput = document.querySelector("#firstName");
const firstNameInfo = document.querySelector(".input-info-firstName");
firstNameInput.addEventListener('keyup', () => {
    if (firstNameInput.value.match(namePattern)) {
        firstNameInput.style.outline = '3px solid forestgreen';
        firstNameInfo.textContent = 'What a beautiful name!';
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
        emailInfo.textContent = 'The email format is correct!';
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
        phoneNumberInfo.textContent = 'The phone number format is correct!';
    } else {
        phoneNumberInput.style.outline = '3px solid crimson';
        phoneNumberInfo.style.color = 'crimson';
        phoneNumberInfo.textContent = 'A phone number should be 9 to 12 numbers, no spaces.';
    }
});

const passwordInput = document.querySelector("#password");
const passwordInfo = document.querySelector(".input-info-password");
passwordInput.addEventListener('keyup', () => {
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
            passwordInfo.style.color = 'forestgreen';
            passwordInfo.textContent = 'All conditions are being met!';
        } else {
            passwordInfo.style.color = 'crimson';
            passwordInfo.textContent = 'Check the password conditions on the right.';
        }
});

const passwordConfirmInput = document.querySelector("#passwordConfirm");
const passwordConfirmInfo = document.querySelector(".input-info-passwordConfirm");
passwordConfirmInput.addEventListener('keyup', () => {
    if (passwordConfirmInput.value === passwordInput.value) {
        passwordConfirmInfo.style.color = 'forestgreen';
        passwordConfirmInfo.textContent = 'The passwords match!';
    } else {
        passwordConfirmInfo.style.color = 'crimson';
        passwordConfirmInfo.textContent = 'The passwords do not match.';
    }
});
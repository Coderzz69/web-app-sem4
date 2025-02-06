const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const dobInput = document.getElementById("dob");
const passwordInput = document.getElementById("password");
const confirm_passwordInput = document.getElementById("confirm-password");
const phoneInput = document.getElementById("phone");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");


const firstNameSpan = document.getElementById("error-firstName");
const lastNameSpan = document.getElementById("error-lastName");
const emailSpan = document.getElementById("error-email");
const dobSpan = document.getElementById("error-dob");
const passwordSpan = document.getElementById("error-password");
const confirmPasswordSpan = document.getElementById("error-confirm-password");
const phoneSpan = document.getElementById("error-phone");


const firstNameRegEx = /^[A-Z][a-z]+$/;
const lastNameRegEx = /^[A-Z][a-z]+$/;
const emailRegEx = /^[a-z]\w*@[a-z]+\.[a-z]{2, 4}$/;
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\!\@\#\$\%\^\&\*\(\)~`]).{8,}$/;
const phoneRegEx = /^\+91[6-9][0-9]{9}$/;


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.attr-section');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add your form validation and submission logic here
        console.log('Form submitted');
    });
});

function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    // Adjust age if birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
}

const validationRules = {
    firstName: { regex: firstNameRegEx, errorSpan: firstNameSpan, message: 'First Name Verified' },
    lastName: { regex: lastNameRegEx, errorSpan: lastNameSpan, message: 'Last Name Verified' },
    email: { regex: emailRegEx, errorSpan: emailSpan, message: 'Valid email Verified' },
    password: { regex: passwordRegEx, errorSpan: passwordSpan, message: 'Valid password Verified' },
    confirmPassword: { match: passwordInput, errorSpan: confirmPasswordSpan, message: 'Passwords must match' },
    phone: { regex: phoneRegEx, errorSpan: phoneSpan, message: 'Phone Number Verified' },
    dob: { custom: calculateAge, errorSpan: dobSpan, message: 'Date of birth Verified', minAge: 18 }
};

function validateInput(input, rule) {
    if (rule.regex && rule.regex.test(input.value)) {
        rule.errorSpan.innerHTML = getVerifiedIcon() + rule.message;
        return true;
    } else if (rule.match && input.value === rule.match.value && input.value !== '') {
        rule.errorSpan.innerHTML = getVerifiedIcon() + rule.message;
        return true;
    } else if (rule.custom && rule.custom(input.value) >= rule.minAge) {
        rule.errorSpan.innerHTML = getVerifiedIcon() + rule.message;
        return true;
    } else {
        return false;
    }
}

function getVerifiedIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>';
}

submitButton.addEventListener("click", () => {
    let isValidated = true;

    for (const [key, rule] of Object.entries(validationRules)) {
        const input = document.getElementById(key);
        if (!validateInput(input, rule)) {
            isValidated = false;
        }
    }

    if (isValidated) {
        document.getElementById("successful-submission").innerText = 'Account Created Successfully !!';
    }
});

resetButton.addEventListener('click', () => {
    document.getElementById("successful-submission").innerText = '';
    for (const rule of Object.values(validationRules)) {
        rule.errorSpan.innerHTML = getVerifiedIcon() + rule.message;
    }
});

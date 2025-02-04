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
const emailRegEx = /^[a-z]\w*@[a-z]+\.[a-z]+$/;
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

submitButton.addEventListener("click", () => {


    isValidated = true;

    if (firstNameRegEx.test(firstNameInput.value)){
       firstNameSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>First Name Verified'
    }else isValidated = false;

    if (lastNameRegEx.test(lastNameInput.value)){
        lastNameSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>Last Name Verified'
    }else isValidated = false;

    if (emailRegEx.test(emailInput.value)){
        emailSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>Valid email Verified'
    }else isValidated = false;

    if (passwordRegEx.test(passwordInput.value)){
        passwordSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>Valid email Verified'
    }else isValidated = false;

    if (passwordInput.value == confirm_passwordInput.value){
        confirmPasswordSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>Passwords must match'
    }else isValidated = false;

    if (phoneRegEx.test(phoneInput.value)){
        phoneSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>Phone Number Verified'
    }else isValidated = false;

    if (calculateAge(dobInput.value) >= 18){
        dobSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>Date of birth Verfied'
    }else isValidated = false;

    if (isValidated){
        document.getElementById("successful-submission").innerText = 'Account Created Successfully !!';
    }

});

resetButton.addEventListener('click', () => {
    document.getElementById("successful-submission").innerText = '';
})
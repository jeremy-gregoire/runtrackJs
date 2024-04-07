const elemTxtFirstname = document.querySelector('#txtFirstname');
const elemTxtLastname = document.querySelector('#txtLastname');
const elemTxtEmail = document.querySelector('#txtEmail');
const elemTxtPassword = document.querySelector('#txtPassword');
const elemTxtConfirmPassword = document.querySelector('#txtConfirmPassword');
const elemBtnSubmit = document.querySelector('#btnSubmit');

window.addEventListener('load', () => {
  checkVariablesElement(
    () => {
      console.log('passed');
    },
    elemTxtFirstname,
    elemTxtLastname,
    elemTxtEmail,
    elemTxtPassword,
    elemTxtConfirmPassword,
    elemBtnSubmit
  );
});

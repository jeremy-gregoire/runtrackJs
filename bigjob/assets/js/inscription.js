const elemFormRegister = document.querySelector('#formRegister');
const elemTxtFirstname = document.querySelector('#txtFirstname');
const elemTxtLastname = document.querySelector('#txtLastname');
const elemTxtEmail = document.querySelector('#txtEmail');
const elemTxtPassword = document.querySelector('#txtPassword');
const elemTxtConfirmPassword = document.querySelector('#txtConfirmPassword');
const elemBtnSubmit = document.querySelector('#btnSubmit');

/**
 * @param {SubmitEvent} e
 */
function onClick_elemBtnSubmit(e) {
  e.preventDefault();

  const error = document.querySelector('#errorMessage');

  if (error) {
    elemFormRegister.removeChild(error);
  }

  if (elemTxtFirstname.value === '') {
    showMessage(elemFormRegister, 'error', 'Le prénom doit être renseigner !');
    return;
  }

  if (elemTxtLastname.value === '') {
    showMessage(elemFormRegister, 'error', 'Le nom de famille doit être renseigner !');
    return;
  }

  if (elemTxtEmail.value === '') {
    showMessage(elemFormRegister, 'error', "L'email doit être renseigner !");
    return;
  }

  if (elemTxtPassword.value === '') {
    showMessage(elemFormRegister, 'error', 'Le mot de passe doit être renseigner !');
    return;
  }

  if (elemTxtConfirmPassword.value === '') {
    showMessage(
      elemFormRegister,
      'error',
      'Le mot de passe de confirmation doit être renseigner !'
    );
    return;
  }

  if (!elemTxtEmail.value.endsWith('@laplateforme.io')) {
    console.log('here');
    showMessage(elemFormRegister, 'error', "L'email doit être un mail LaPlateforme_ !");
    return;
  }

  if (elemTxtPassword.value.length < 8) {
    showMessage(
      elemFormRegister,
      'error',
      'Le mot de passe doit comporter au minimum 8 caractères !'
    );
    return;
  }

  if (elemTxtPassword.value !== elemTxtConfirmPassword.value) {
    showMessage(
      elemFormRegister,
      'error',
      'Le mot de passe de confirmation doit correspondre avec le mot de passe !'
    );
    return;
  }

  showMessage(elemFormRegister, 'success', 'Votre compte a été enregistrer avec succès !');
}

window.addEventListener('load', () => {
  checkVariablesElement(
    () => {
      if (window.localStorage.getItem('userAlreadyConnected') === 'true') {
        redirect('assets/pages/calendrier.html');
      }

      elemBtnSubmit.addEventListener('click', onClick_elemBtnSubmit);
    },
    elemFormRegister,
    elemTxtFirstname,
    elemTxtLastname,
    elemTxtEmail,
    elemTxtPassword,
    elemTxtConfirmPassword,
    elemBtnSubmit
  );
});

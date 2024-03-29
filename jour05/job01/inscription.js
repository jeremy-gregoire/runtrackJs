const elemFormRegister = document.querySelector('#formRegister');

const elemFieldLastname = document.querySelector('#fieldLastname');
const elemTxtLastname = document.querySelector('#txtLastname');

const elemFieldFirstname = document.querySelector('#fieldFirstname');
const elemTxtFirstname = document.querySelector('#txtFirstname');

const elemFieldEmail = document.querySelector('#fieldEmail');
const elemTxtEmail = document.querySelector('#txtEmail');

const elemFieldAddress = document.querySelector('#fieldAddress');
const elemTxtAddress = document.querySelector('#txtAddress');

const elemFieldZipCode = document.querySelector('#fieldZipCode');
const elemTxtZipCode = document.querySelector('#txtZipCode');

const elemFieldPassword = document.querySelector('#fieldPassword');
const elemPwPassword = document.querySelector('#pwPassword');

const elemFieldConfirmPassword = document.querySelector(
  '#fieldConfirmPassword'
);
const elemPwConfirmPassword = document.querySelector('#pwConfirmPassword');

const FILE_PATH = 'utilisateurs.json';

/**
/**
 * @param {string} lastname
 * @param {string} firstname
 * @param {string} email
 * @param {string} address
 * @param {string} zipcode
 * @param {string} password
 */
async function addUser(lastname, firstname, email, address, zipcode, password) {
  let data = {
    lastname,
    firstname,
    email,
    address,
    zipcode,
    password,
  };
}

/**
 * @param {HTMLElement} parent
 * @param {string} message
 */
function showMessageElement(parent, message, status = 'success') {
  const elemParagraph = document.createElement('p');
  elemParagraph.innerText = message;
  elemParagraph.style.color =
    status === 'success' ? 'green' : status === 'error' ? 'red' : 'black';
  parent.appendChild(elemParagraph);
}

/**
 * @param {SubmitEvent} e
 */
function onSubmit_elemFormRegister(e) {
  let isLastnameEmpty = elemTxtLastname.value === '';
  let isFirstnameEmpty = elemTxtFirstname.value === '';
  let isEmailEmpty = elemTxtEmail.value === '';
  let isAddressEmpty = elemTxtAddress.value === '';
  let isZipCodeEmpty = elemTxtZipCode.value === '';
  let isZipCodeValid = /\d{5}/.test(elemTxtZipCode.value);
  let isPasswordEmpty = elemPwPassword.value === '';
  let isPasswordValid = elemPwPassword.value.length >= 8;
  let isConfirmPasswordEmpty = elemPwConfirmPassword.value === '';
  let passwordsMatch = elemPwPassword.value === elemPwConfirmPassword.value;

  // Stops the form doing the same thing by default
  e.preventDefault();

  // Clears all error messages
  elemFormRegister.querySelectorAll('.errors').forEach((errorsContainer) => {
    errorsContainer.textContent = '';
  });

  // If everything is ok, adds a new user into the database, then resets all inputs and shows a message that confirm the registering
  if (
    !isLastnameEmpty &&
    !isFirstnameEmpty &&
    !isEmailEmpty &&
    !isAddressEmpty &&
    !isZipCodeEmpty &&
    isZipCodeValid &&
    !isPasswordEmpty &&
    isPasswordValid &&
    !isConfirmPasswordEmpty &&
    passwordsMatch
  ) {
    addUser(
      elemTxtLastname.value,
      elemTxtFirstname.value,
      elemTxtEmail.value,
      elemTxtAddress.value,
      elemTxtZipCode.value,
      elemPwPassword.value
    );

    elemTxtLastname.value = '';
    elemTxtFirstname.value = '';
    elemTxtEmail.value = '';
    elemTxtAddress.value = '';
    elemTxtZipCode.value = '';
    elemPwPassword.value = '';
    elemPwConfirmPassword.value = '';

    showMessageElement(elemFormRegister, "L'utilisateur a été enregistré !");
  } else {
    // Shows error messages
    if (isLastnameEmpty) {
      showMessageElement(
        elemFieldLastname.querySelector('.errors'),
        'La saisie du nom de famille est requis !',
        'error'
      );
    }

    if (isFirstnameEmpty) {
      showMessageElement(
        elemFieldFirstname.querySelector('.errors'),
        'La saisie du prénom est requis !',
        'error'
      );
    }

    if (isEmailEmpty) {
      showMessageElement(
        elemFieldEmail.querySelector('.errors'),
        "La saisie de l'adresse électronique est requis !",
        'error'
      );
    }

    if (isAddressEmpty) {
      showMessageElement(
        elemFieldAddress.querySelector('.errors'),
        "La saisie de l'adresse est requis !",
        'error'
      );
    }

    if (isZipCodeEmpty) {
      showMessageElement(
        elemFieldZipCode.querySelector('.errors'),
        'La saisie du code postal est requis !',
        'error'
      );
    } else if (!isZipCodeValid) {
      showMessageElement(
        elemFieldZipCode.querySelector('.errors'),
        'La saisie du code postal doit être sous la forme XXXXX !',
        'error'
      );
    }

    if (isPasswordEmpty) {
      showMessageElement(
        elemFieldPassword.querySelector('.errors'),
        'La saisie du mot de passe est requis !',
        'error'
      );
    } else if (!isPasswordValid) {
      showMessageElement(
        elemFieldPassword.querySelector('.errors'),
        'Le mot de passe doit faire au moins 8 caractères de long !',
        'error'
      );
    }

    if (isConfirmPasswordEmpty) {
      showMessageElement(
        elemFieldConfirmPassword.querySelector('.errors'),
        'La saisie du mot de passe de confirmation est requis !',
        'error'
      );
    }

    if (elemPwPassword.value !== elemPwConfirmPassword.value) {
      let elemErrorsArray = elemFormRegister.querySelectorAll('.errors');
      showMessageElement(
        elemErrorsArray[elemErrorsArray.length - 1],
        'Le mot de passe et le mot de passe de confirmation doivent être les mêmes !',
        'error'
      );
    }
  }

  // Redirects the user to the connexion page
  // window.location.href = 'connexion.html';
}

window.addEventListener('DOMContentLoaded', () => {
  if (elemFormRegister) {
    elemFormRegister.addEventListener('submit', onSubmit_elemFormRegister);
  } else {
    console.error(
      "'elemFormRegister', 'elemTxtLastname', 'elemTxtFirstname', 'elemTxtEmail', 'elemTxtAddress', 'elemTxtZipCode', 'elemPwPassword' or 'elemPwConfirmPassword' is/are NULL!"
    );
  }
});

const elemFormConnection = document.querySelector('#formConnection');
const elemTxtEmail = document.querySelector('#txtEmail');
const elemTxtPassword = document.querySelector('#txtPassword');
const elemErrors = document.querySelector('#errors');

const FILE_PATH = 'utilisateurs.json';

/*
 * Finds all the user of the data base.
 * @returns {object} A JSON representation of the data.
 */
async function findUsers() {
  const response = await fetch(FILE_PATH);

  if (!response.ok || response.status !== 200) {
    console.error('Impossible to read the file inside of', FILE_PATH, '!');
    return;
  }

  return await response.json();
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
function onSubmit_elemFormConnection(e) {
  e.preventDefault();
  elemErrors.textContent = '';

  findUsers(FILE_PATH).then((data) => {
    let match = data.filter(
      (user) =>
        elemTxtEmail.value === user.email &&
        elemTxtPassword.value === user.password
    );

    if (match.length === 0) {
      showMessageElement(
        elemErrors,
        "Email ou mot de passe n'est/ne sont pas correct(s) !",
        'error'
      );
      return;
    }

    elemTxtEmail.value = '';
    elemTxtPassword.value = '';

    showMessageElement(
      elemErrors,
      `Bienvenue, ${match[0].firstname} ${match[0].lastname}`
    );
  });
}

if (elemFormConnection) {
  elemFormConnection.addEventListener('submit', onSubmit_elemFormConnection);
} else {
  console.error("'elemFormConnection' is NULL!");
}

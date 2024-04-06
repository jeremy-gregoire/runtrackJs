const elemFormConnexion = document.querySelector('#formConnexion');
const elemTxtEmail = document.querySelector('#txtEmail');
const elemTxtPassword = document.querySelector('#txtPassword');
const elemBtnConnect = document.querySelector('#btnConnect');

/**
 * @param {SubmitEvent} e
 */
function onClick_elemBtnConnect(e) {
  e.preventDefault();
  const elemErrorMessage = document.querySelector('#errorMessage');
  if (elemErrorMessage) {
    elemFormConnexion.removeChild(elemErrorMessage);
  }

  if (!elemFormConnexion || !elemTxtEmail || !elemTxtPassword) {
    console.error("'elemFormConnexion', 'elemTxtEmail' or 'elemTxtPassword' is/are NULL!");
    return;
  }

  const email = elemTxtEmail.value;
  const password = elemTxtPassword.value;
  if (email === '' || password === '') {
    showMessage(
      elemFormConnexion,
      'error',
      "L'email et le mot de passe doivent être obligatoirement renseigner !"
    );
    return;
  }

  getUsers().then((data) => {
    const match = data.filter((user) => user.email === email && user.password === password);
    const user = match.length === 0 ? undefined : match[0];

    if (user) {
      showMessage(elemFormConnexion, 'success', 'Vous vous êtes parfaitement connecté !');
    } else {
      showMessage(elemFormConnexion, 'error', "L'email ou le mot de passe est/sont incorrect(s)");
    }
  });
}

if (elemBtnConnect) {
  elemBtnConnect.addEventListener('click', onClick_elemBtnConnect);
} else {
  console.error("'elemBtnConnect' is NULL!");
}

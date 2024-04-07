const elemFormConnexion = document.querySelector('#formConnexion');
const elemTxtEmail = document.querySelector('#txtEmail');
const elemTxtPassword = document.querySelector('#txtPassword');
const elemBtnConnect = document.querySelector('#btnConnect');

let user = undefined;

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
    user = match.length === 0 ? undefined : match[0];

    if (user) {
      window.localStorage.setItem('userAlreadyConnected', true);
      window.localStorage.setItem('userFirstname', user.firstName);
      window.localStorage.setItem('userLastname', user.lastName);
      window.localStorage.setItem('userEmail', user.email);
      window.localStorage.setItem('userRoleValue', user.role.value);
      window.localStorage.setItem('userRoleLabel', user.role.label);
      redirect('assets/pages/calendrier.html');
    } else {
      showMessage(elemFormConnexion, 'error', "L'email ou le mot de passe est/sont incorrect(s)");
    }
  });
}

window.addEventListener('load', () => {
  if (window.localStorage.getItem('userAlreadyConnected') === 'true') {
    redirect('assets/pages/calendrier.html');
  } else {
    checkVariablesElement(() => {
      elemBtnConnect.addEventListener('click', onClick_elemBtnConnect);
    }, elemBtnConnect);
  }
});

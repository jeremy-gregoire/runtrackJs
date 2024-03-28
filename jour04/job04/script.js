const FILE_PATH = 'utilisateur.json';

const elemBtnUpdate = document.querySelector('#btnUpdate');
const elemRowContainer = document.querySelector('#rowContainer');

async function getUsers() {
  const response = await fetch(FILE_PATH);

  if (!response.ok || response.status !== 200) {
    console.error('Impossible de lire le fichier de chemin:', FILE_PATH);
    return;
  }

  return await response.json();
}

function createRowElement(parent, id, lastname, firstname, email) {
  const elemRow = document.createElement('tr');

  const elemColID = document.createElement('td');
  elemColID.innerText = id;
  elemRow.appendChild(elemColID);

  const elemColLastname = document.createElement('td');
  elemColLastname.innerText = lastname;
  elemRow.appendChild(elemColLastname);

  const elemColFirstname = document.createElement('td');
  elemColFirstname.innerText = firstname;
  elemRow.appendChild(elemColFirstname);

  const elemColEmail = document.createElement('td');
  elemColEmail.innerText = email;
  elemRow.appendChild(elemColEmail);

  parent.appendChild(elemRow);
}

function onClick_elemBtnUpdate(e) {
  e.preventDefault();
  elemRowContainer.textContent = '';

  getUsers().then((data) => {
    data.forEach((user) => {
      createRowElement(
        elemRowContainer,
        user.id,
        user.nom,
        user.prenom,
        user.email
      );
    });
  });
}

window.addEventListener('load', () => {
  if (!elemBtnUpdate || !elemRowContainer) {
    throw new Error("'elemBtnUpdate' ou 'elemRowContainer' est/sont à NULL !");
  }

  elemBtnUpdate.addEventListener('click', onClick_elemBtnUpdate);
});

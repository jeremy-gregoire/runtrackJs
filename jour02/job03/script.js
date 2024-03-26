const elemButton = document.querySelector('#button');
const elemCompteur = document.querySelector('#compteur');

function addOne() {
  if (!elemCompteur) {
    console.error("'elemCompteur' est NULL !");
    return;
  }

  let compteur = parseInt(elemCompteur.textContent);
  compteur++;

  elemCompteur.textContent = compteur;
}

if (elemButton) {
  elemButton.addEventListener('click', addOne);
} else {
  console.error("'elemButton' est NULL !");
}

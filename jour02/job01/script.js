const elemCitation = document.querySelector('#citation');
const elemButton = document.querySelector('#button');

function citation() {
  const elemCitationText = elemCitation.textContent.trim();
  console.log(elemCitationText);
}

if (elemButton) {
  elemButton.addEventListener('click', citation);
} else {
  console.log("Le button ne peut pas avoir d'évènement car il est NULL !");
}

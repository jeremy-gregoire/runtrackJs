const elemPCitation = document.querySelector('#pCitation');
const elemBtnRebootWorld = document.querySelector('#btnRebootWorld');
const elemsPaginationLink = document.querySelectorAll('.pagination-link');
const elemsListGroupItem = document.querySelectorAll('.list-group-item');

const CITATIONS = [
  "J'ai vu tant de choses, que vous, humains, ne pourriez pas croire... De grands navires en feu surgissant de l'épaule d'Orion, j'ai vu des rayons fabuleux, des rayons C, briller dans l'ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie. Il est temps de mourir.",
  "T'endors pas, c'est l'heure de mourir.",
  "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.",
  'Avez-vous déjà désactivé un humain par erreur ?',
  "C'est dommage qu'elle doive mourir, mais on en est tous là !",
];

const MES_CITATIONS = [
  'SAUSSURE !!!',
  "Le désert c'est comme une plage mais sans la mer !",
  "« Je fais le rêve qu'un jour cette nation se lèvera et vivra le vrai sens de sa foi : « Nous tenons ces vérités comme allant de soi, que les hommes naissent égaux. » » - Martin Lurther King",
];

if (elemBtnRebootWorld) {
  elemBtnRebootWorld.addEventListener('click', (e) => {
    e.preventDefault();

    if (!elemPCitation) {
      console.error("'elemPCitation' is NULL!");
      return;
    }

    let randomIndex = Math.floor(Math.random() * CITATIONS.length);
    elemPCitation.textContent = CITATIONS[randomIndex];
  });
} else {
  console.error("'elemBtnRebootWorld' is NULL!");
}

elemsPaginationLink.forEach((elemLink) => {
  elemLink.addEventListener('click', (e) => {
    e.preventDefault();
    elemPCitation.textContent =
      MES_CITATIONS[parseInt(e.target.textContent) - 1];
  });
});

elemsListGroupItem.forEach((elemItem) => {
  elemItem.style.cursor = 'pointer';
  elemItem.addEventListener('click', (e) => {
    e.preventDefault();

    let actives = [];
    elemsListGroupItem.forEach((elem) => {
      if (elem.classList.contains('active')) {
        actives.push(elem);
      }
    });

    if (actives !== 0) {
      e.target.classList.add('active');
      actives[0].classList.remove('active');
    }
  });
});

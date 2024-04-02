const elemPCitation = document.querySelector('#pCitation');
const elemBtnRebootWorld = document.querySelector('#btnRebootWorld');

const CITATIONS = [
  "J'ai vu tant de choses, que vous, humains, ne pourriez pas croire... De grands navires en feu surgissant de l'épaule d'Orion, j'ai vu des rayons fabuleux, des rayons C, briller dans l'ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie. Il est temps de mourir.",
  "T'endors pas, c'est l'heure de mourir.",
  "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.",
  'Avez-vous déjà désactivé un humain par erreur ?',
  "C'est dommage qu'elle doive mourir, mais on en est tous là !",
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

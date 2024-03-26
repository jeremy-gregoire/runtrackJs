const elemFooter = document.querySelector('#footer');

let pourcentageScroll = 0;
let rouge = 0;
let vert = 0;
let bleu = 0;

elemFooter.style.backgroundColor = `rgb(${rouge}, ${vert}, ${bleu})`;

window.addEventListener('scroll', () => {
  pourcentageScroll = window.scrollY / window.scrollMaxY;
  rouge = 255 * pourcentageScroll;
  vert = 255 * pourcentageScroll;
  bleu = 255 * pourcentageScroll;
  elemFooter.style.backgroundColor = `rgb(${rouge}, ${vert}, ${bleu})`;
});

const elemKeyLogger = document.querySelector('#keylogger');
const caracteresPermis = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

elemKeyLogger.value = '';

document.addEventListener('keydown', (e) => {
  if (caracteresPermis.includes(e.key)) {
    elemKeyLogger.value += e.key;
  }
});

const elemMain = document.querySelector('main');
const elemButton = document.querySelector('button');
const filePath = 'expression.txt';

if (elemButton) {
  elemButton.addEventListener('click', async (e) => {
    e.preventDefault();

    if (!elemMain) {
      console.error("'elemMain' est à NULL !");
      return;
    }

    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        let quotes = data.split('\n');
        quotes.forEach((quote) => {
          const p = document.createElement('p');
          p.innerText = quote.trim();
          elemMain.appendChild(p);
        });
      })
      .catch((error) => console.error(error));
  });
} else {
  console.error("'elemButton' est à NULL !");
}

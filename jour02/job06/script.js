const elemBtnSubmit = document.querySelector('#btnSubmit');

if (elemBtnSubmit) {
  elemBtnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const elemWrapper = document.querySelector('#wrapper');
    const elemTxtCode = document.querySelector('#txtCode');

    if (!elemWrapper) {
      console.error("'elemWrapper' est à NULL !");
      return;
    }

    if (!elemTxtCode) {
      console.error("'elemTxtCode' est à NULL !");
      return;
    }

    let code = elemTxtCode.value;
    if (code !== 'konami') {
      console.error('Mauvais code !');
      return;
    }

    elemWrapper.classList.add('wrapper');
    elemTxtCode.value = '';
  });
} else {
  console.error("'elemBtnSubmit' est à NULL !");
}

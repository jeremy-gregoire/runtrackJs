const elemButton = document.querySelector('#button');

function showhide() {
  let elemArticle = document.querySelector('#citation');

  if (!elemArticle) {
    elemArticle = document.createElement('article');
    elemArticle.setAttribute('id', 'citation');
    const elemArticleText = document.createTextNode(
      "L'important n'est pas la chute, mais l'atterrissage."
    );

    elemArticle.appendChild(elemArticleText);
    document.body.prepend(elemArticle);
    return;
  }

  document.body.removeChild(elemArticle);
}

if (elemButton) {
  elemButton.addEventListener('click', showhide);
} else {
  console.error("L'élèment button 'elemButton' est NULL !");
}

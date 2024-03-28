const FILE_PATH = 'pokemon.json';

const elemMain = document.querySelector('main');
const elemForm = document.querySelector('#form');
const elemTxtID = document.querySelector('#txtID');
const elemTxtNom = document.querySelector('#txtNom');
const elemSltType = document.querySelector('#sltType');

async function getPokemon() {
  const response = await fetch(FILE_PATH);

  if (!response.ok || response.status !== 200) {
    console.error('Impossible de lire le fichier de chemin:', FILE_PATH);
    return;
  }

  return await response.json();
}

function onSubmit_elemForm(e) {
  e.preventDefault();

  if (elemTxtID.value === '' || elemTxtNom === '') {
    console.error("'elemTxtID' ou 'elemTxtNom' est/sont vide(s) !");
    return;
  }

  getPokemon().then((data) => {
    let pokemon = data.filter(
      (pokemon) =>
        pokemon.id === parseInt(elemTxtID.value) &&
        pokemon.name.french === elemTxtNom.value &&
        pokemon.type.includes(elemSltType.value)
    )[0];

    const elemPokemonInfos = document.createElement('section');

    if (!pokemon) {
      const elemNoMatchText = document.createElement('p');
      elemNoMatchText.innerText = 'Aucun Pokémon a été trouvé avec ce filtre !';
      elemPokemonInfos.appendChild(elemNoMatchText);
    } else {
      const elemPokemonName = document.createElement('p');
      elemPokemonName.innerText = 'Name: ' + pokemon.name.french;
      elemPokemonInfos.appendChild(elemPokemonName);

      const elemPokemonTypes = document.createElement('p');
      elemPokemonTypes.innerText =
        pokemon.type.length > 1
          ? 'Types: ' + pokemon.type.join(', ')
          : 'Type: ' + pokemon.type[0];
      elemPokemonInfos.appendChild(elemPokemonTypes);

      const elemPokemonBase = document.createElement('p');
      elemPokemonBase.innerText = 'Base:';
      elemPokemonInfos.appendChild(elemPokemonBase);

      const elemPokemonBaseUL = document.createElement('ul');
      elemPokemonInfos.appendChild(elemPokemonBaseUL);

      for (const [key, value] of Object.entries(pokemon.base)) {
        const elemPokemonBaseLI = document.createElement('li');
        elemPokemonBaseLI.innerText = key + ': ' + value;
        elemPokemonBaseUL.appendChild(elemPokemonBaseLI);
      }
    }

    elemMain.appendChild(elemPokemonInfos);
  });

  elemForm.removeEventListener('submit', onSubmit_elemForm);
}

window.addEventListener('DOMContentLoaded', () => {
  if (elemMain && elemForm) {
    if (!elemTxtID || !elemTxtNom || !elemSltType) {
      throw new Error(
        "'elemTxtID', 'elemTxtNom' ou 'elemSltType' est/sont à NULL !"
      );
    }

    getPokemon().then((data) => {
      let optionsData = [];
      data.forEach((pokemon) => {
        pokemon.type.forEach((type) => {
          if (!optionsData.includes(type)) {
            optionsData.push(type);
          }
        });
      });

      optionsData.forEach((option) => {
        const elemOption = document.createElement('option');
        elemOption.value = option;
        elemOption.innerText = option;
        elemSltType.appendChild(elemOption);
      });
    });

    elemForm.addEventListener('submit', onSubmit_elemForm);
  } else {
    console.error("'elemMain' et 'elemForm' est à NULL !");
  }
});

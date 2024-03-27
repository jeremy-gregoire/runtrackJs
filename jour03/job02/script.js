/**
 * @param {callback} callback
 */
function howMuchTimeTaken(callback) {
  let startTime = performance.now();
  callback();
  let endTime = performance.now();

  let timeElapsed = endTime - startTime;
  console.log(
    "L'appelle de votre fonction à pris %s %s",
    timeElapsed,
    timeElapsed > 1 ? 'millisecondes' : 'milliseconde'
  );
}

/**
 * @param {any[]} array
 */
function createMixedArray(array) {
  let output = [];
  let dummyArray = array;

  do {
    let randomIndex = Math.floor(Math.random() * dummyArray.length);
    output.push(dummyArray[randomIndex]);
    dummyArray.splice(randomIndex, 1);
  } while (dummyArray.length != 0);

  return output;
}

// $(document).ready(() => {
//   const FILES_PATH = [
//     'images/arc1.png',
//     'images/arc2.png',
//     'images/arc3.png',
//     'images/arc4.png',
//     'images/arc5.png',
//     'images/arc6.png',
//   ];

//   let current = FILES_PATH;

//   $('#btnMixImages').click(() => {
//     current = createMixedArray(FILES_PATH);

//     for (let i = 0; i < current.length; i++) {
//       $(`img[src="images/arc${i}.png"]`).attr('src', `${current[i]}`);
//     }
//   });

//   for (let i = 0; i < current.length; i++) {
//     $('main').append(`<img src="${current[i]}" />`);
//   }
// });

$(document).ready(() => {
  const IMAGES = [
    { src: 'images/arc1.png', alt: "La première pièce de l'arc-en-ciel" },
    { src: 'images/arc2.png', alt: "La deuxième pièce de l'arc-en-ciel" },
    { src: 'images/arc3.png', alt: "La troisième pièce de l'arc-en-ciel" },
    { src: 'images/arc4.png', alt: "La quatrième pièce de l'arc-en-ciel" },
    { src: 'images/arc5.png', alt: "La cinquième pièce de l'arc-en-ciel" },
    { src: 'images/arc6.png', alt: "La sixième pièce de l'arc-en-ciel" },
  ];
  let alreadyMixed = false;

  IMAGES.forEach((image) => {
    $('#spawner').append(
      `<li class="draggable"><img class="arc-image" src="${image.src}" alt="${image.alt}" /></li>`
    );
  });

  $('#sortable').sortable({
    revert: true,
  });

  $('.draggable').draggable({
    connectToSortable: '#sortable',
    revert: 'invalid',
  });

  $('ul, li').disableSelection();

  $('#btnMixImages').click(() => {
    if (alreadyMixed) {
      return;
    }

    let randomSets = createMixedArray(IMAGES);

    $('.arc-image').each((i, v) => {
      v.src = randomSets[i].src;
      v.alt = randomSets[i].alt;
    });

    alreadyMixed = true;
  });
});

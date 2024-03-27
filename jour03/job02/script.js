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
    { fileName: 'arc1', alt: "La première pièce de l'arc-en-ciel" },
    { fileName: 'arc2', alt: "La deuxième pièce de l'arc-en-ciel" },
    { fileName: 'arc3', alt: "La troisième pièce de l'arc-en-ciel" },
    { fileName: 'arc4', alt: "La quatrième pièce de l'arc-en-ciel" },
    { fileName: 'arc5', alt: "La cinquième pièce de l'arc-en-ciel" },
    { fileName: 'arc6', alt: "La sixième pièce de l'arc-en-ciel" },
  ];

  IMAGES.forEach((image) => {
    $('#spawner').append(
      `<li class="draggable"><img class="arc-image" src="images/${image.fileName}.png" alt="${image.alt}" /></li>`
    );
  });

  $('#sortable').sortable({
    revert: true,
  });
  $('.draggable').draggable({
    connectToSortable: '#sortable',
    revert: 'invalid',
  });

  $('ul.draggable, li').disableSelection();
});

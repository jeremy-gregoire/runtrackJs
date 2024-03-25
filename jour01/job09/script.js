// function tri(tableau, order = 'asc') {
//   switch (order) {
//     case 'asc':
//       return tableau.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
//     case 'desc':
//       return tableau.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
//   }
// }

function tri(tableau, order = 'asc') {
  let gauche = [];
  let droite = [];

  switch (order) {
    case 'asc':
      var pivot = tableau[0];

      for (let i = 0; i < tableau.length; i++) {
        let valeur = tableau[i];

        if (valeur < pivot) {
          gauche.push(valeur);
        } else {
          droite.push(valeur);
        }
      }

      return [].concat(gauche).concat(droite);
    case 'desc':
      var pivot = tableau[tableau.length - 1];

      for (let i = 0; i < tableau.length; i++) {
        let valeur = tableau[i];

        if (valeur < pivot) {
          gauche.push(valeur);
        } else {
          droite.push(valeur);
        }
      }

      return [].concat(gauche).concat(droite);
  }
}

let entrees = [7, 4, 9, 15, 3, 6];

console.log(entrees);
console.log(tri(entrees, 'asc'));

// function tri(tableau, order = 'asc') {
//   switch (order) {
//     case 'asc':
//       return tableau.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
//     case 'desc':
//       return tableau.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
//   }
// }

function tri(tableau, order = 'asc') {
  let sorties = tableau;
  let taille = sorties.length;

  for (let i = 0; i < taille; i++) {
    for (let j = 0; j < taille - i - 1; j++) {
      let sensEchangement =
        order === 'asc'
          ? tableau[j] > tableau[j + 1]
          : tableau[j] < tableau[j + 1];

      if (sensEchangement) {
        let tmp = sorties[j];
        sorties[j] = sorties[j + 1];
        sorties[j + 1] = tmp;
      }
    }
  }

  return sorties;
}

let entrees = [7, 4, 9, 15, 3, 6];

console.log(entrees);
console.log(tri(entrees));
console.log(tri(entrees, 'desc'));

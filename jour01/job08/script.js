/**
 * Test si les deux nombres sont des nombres premiers et retourne la somme.
 * @param {number} nombre1 Le 1er nombre à additionner.
 * @param {number} nombre2 Le 2e nombre à additionner.
 * @returns {number | boolean} La somme des deux nombres ou faux si un des deux nombres n'est pas premier.
 */
function sommesNombresPremiers(nombre1, nombre2) {
  const estPremier = (nombre) => {
    for (let i = 2, s = Math.sqrt(nombre); i <= s; i++) {
      if (nombre % i == 0) return false;
    }

    return nombre > 1;
  };

  // Retourne faux si un des deux nombre n'est pas dans la liste de nombre premier calculer
  if (!estPremier(nombre1) || !estPremier(nombre2)) {
    return false;
  }

  // Retourne la somme des deux nombres.
  return nombre1 + nombre2;
}

console.log(sommesNombresPremiers(11, 13));
console.log(sommesNombresPremiers(11, 96));
console.log(sommesNombresPremiers(96, 11));

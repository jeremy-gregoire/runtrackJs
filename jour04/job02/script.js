/**
 * @param {string} json
 * @param {string} key
 * @returns {any}
 */
function jsonValueKey(json, key) {
  return JSON.parse(json)[key].trim();
}

fetch('la-plateforme.json')
  .then((response) => response)
  .then(async (data) => {
    let trainingContent = await data.text();
    console.log(jsonValueKey(trainingContent, 'city'));
  })
  .catch((error) => console.error(error));

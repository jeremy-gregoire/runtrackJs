/**
 * This file stores very usefull functions that can be used in different pages.
 */

/**
 * @param {HTMLElement} target
 * @param {string} message
 */
function showMessage(target, type, message) {
  const template = document.createElement('template');
  template.innerHTML = `
    <div id="errorMessage" class="mt-4 alert ${
      type === 'error' ? 'alert-danger' : type === 'success' ? 'alert-success' : 'alert-info'
    }" role="alert">
      ${message}
    </div>
  `.trim();
  target.appendChild(template.content.firstElementChild);
}

/**
 * @param {string} elementTag
 * @param {HTMLElement} parentElement
 * @param {object} options
 * @param {number} ordering
 */
function createQuickHTMLElement(elementTag, parentElement, options = {}, ordering = 1) {
  const element = document.createElement(elementTag);

  for (const [property, value] of Object.entries(options)) {
    element[property] = value;
  }

  if (ordering === -1) {
    parentElement.prepend(element.content.firstElementChild);
  } else {
    parentElement.appendChild(element.content.firstElementChild);
  }
}

/**
 * @param {string} url
 */
function redirect(url) {
  window.location.replace(window.location.origin + '/bigjob/' + url);
}

function checkVariablesElement(callback, ...elements) {
  if (elements.some((element) => !element)) {
    console.error('One or many element(s) is/are NULL!');
    return;
  }

  callback();
}

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

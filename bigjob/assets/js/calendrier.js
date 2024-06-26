const elemDropdownUser = document.querySelector('#dropdown-user');
const elemDropdownUserItems = document.querySelector('#dropdown-user-items');
const elemBtnDisconnect = document.querySelector('#btnDisconnect');

window.addEventListener('load', () => {
  checkVariablesElement(
    () => {
      elemDropdownUser.textContent = window.localStorage.getItem('userEmail');
      elemBtnDisconnect.addEventListener('click', () => {
        window.localStorage.clear();
        redirect('assets/pages/connexion.html');
      });

      if (
        window.localStorage.getItem('userRoleValue') === 'moderator' ||
        window.localStorage.getItem('userRoleValue') === 'admin'
      ) {
        createQuickHTMLElement(
          'template',
          elemDropdownUserItems,
          {
            innerHTML:
              '<li><a class="dropdown-item" href="./backoffice.html">Panel administrateur</a></li>',
          },
          -1
        );
      }
    },
    elemDropdownUser,
    elemDropdownUserItems,
    elemBtnDisconnect
  );
});

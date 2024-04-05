const elemTableBody = document.querySelector('#table-body');

async function getUsers() {
  try {
    const response = await fetch('../js/users.json');

    if (!response.ok || response.status !== 200) {
      console.error(
        `[${response.status}] Impossible to fetch users at '${response.url}'`
      );
      return undefined;
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

function createRow(
  userId,
  userFirstname,
  userLastname,
  userEmail,
  userRegistrationDate,
  userLastConnection,
  userIsConnected,
  userRoles
) {
  const elemTemplate = document.createElement('template');
  const rolesRow = userRoles.map((role) => role.label).join(', ');
  const roles = userRoles.map((role) => role.value);

  elemTemplate.innerHTML = `
    <tr>
      <th scope="row">${userId}</th>
      <td>${userFirstname}</td>
      <td>${userLastname}</td>
      <td>${userEmail}</td>
      <td>${userRegistrationDate}</td>
      <td>${userLastConnection}</td>
      <td>${userIsConnected ? 'Oui' : 'Non'}</td>
      <td>${rolesRow}</td>
      <td>
        ${
          roles.includes('admin')
            ? ''
            : roles.includes('moderator')
            ? `
            <button class="btn btn-danger" title="Révoquer les droits">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
                <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
              </svg>
            </button>
            <button class="btn btn-danger" title="Faire passer en Administrateur">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
              </svg>
            </button>
            `.trim()
            : `
            <button class="btn btn-danger" title="Faire passer en Modérateur">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
              </svg>
            </button>`.trim()
        }
      </td>
    </tr>
  `.trim();

  return elemTemplate.content.firstElementChild;
}

if (elemTableBody) {
  getUsers().then((users) => {
    users.forEach((user) => {
      elemTableBody.appendChild(
        createRow(
          user.userId,
          user.firstName,
          user.lastName,
          user.email,
          user.registeredAt,
          user.connectedAt,
          user.isConnected,
          user.roles
        )
      );
    });
  });
} else {
  console.error("'elemTableBody' is undefined!");
}

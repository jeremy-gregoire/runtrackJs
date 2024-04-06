/**
 * This file stores very usefull functions that can be used to get data of the fictive database.
 */

/**
 * Gets all users in the database.
 */
async function getUsers() {
  try {
    const response = await fetch('../js/users.json');

    if (!response.ok || response.status !== 200) {
      console.error(`[${response.status}] Impossible to fetch users at '${response.url}'`);
      return undefined;
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

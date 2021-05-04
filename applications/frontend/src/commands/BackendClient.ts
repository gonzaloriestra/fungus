const HOST = process.env.BACKEND_HOST;

export default {
  put({ path, body = {}, accessToken = '' }): Promise<Response> {
    return fetch(`${HOST}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  async get({ path, accessToken = '' }): Promise<Response> {
    const response = await fetch(`${HOST}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      // To-Do Control better the error, maybe not here
      throw Error(`Something happens fetching the info!!! GET to ${HOST}${path}`);
    }

    return await response.json();
  },
};

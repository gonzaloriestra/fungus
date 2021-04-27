const HOST = '/api';

export default {
  put({ path, body = {} }): Promise<Response> {
    return fetch(`${HOST}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },

  get({ path }): Promise<Response> {
    return fetch(`${HOST}${path}`, {
      method: 'GET',
    });
  },
};

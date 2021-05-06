const HOST = '/api';

export default {
  put({ path, body = {} }): Promise<Response> {
    return fetch(`${HOST}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },

  async get<T>(path: string): Promise<T> {
    const res = await fetch(`${HOST}${path}`);

    if (!res.ok) {
      throw Error('Something happens fetching the info!!!');
    }

    return await res.json();
  },
};

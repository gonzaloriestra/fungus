const HOST = '/api';

export default {
  async put(path: string, { body = {} } = {}): Promise<void> {
    const response = await fetch(`${HOST}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // To-Do custom exception here
      throw Error('Sommething happens feching the info!!!');
    }
  },

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${HOST}${path}`);

    if (!response.ok) {
      throw Error('Something happens fetching the info!!!');
    }

    return await response.json();
  },
};

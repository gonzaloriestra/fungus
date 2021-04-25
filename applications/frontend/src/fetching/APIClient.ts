import axios from 'axios';

const HOST = '/api';

type QueryResponse = {
  data: object;
};

export default {
  put({ path, body = {} }): void {
    fetch(`${HOST}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },

  get({ path, accessToken = '' }): Promise<QueryResponse> {
    return axios(`${HOST}${path}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

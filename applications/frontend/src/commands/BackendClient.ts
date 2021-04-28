import axios from 'axios';

const HOST = process.env.BACKEND_HOST;

type QueryResponse = {
  data: object;
};

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

  get({ path, accessToken = '' }): Promise<QueryResponse> {
    // To-Do use fetch
    return axios(`${HOST}${path}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

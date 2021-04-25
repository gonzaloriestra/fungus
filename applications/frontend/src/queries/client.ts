import axios from 'axios';

const HOST = process.env.BACKEND_HOST;

type QueryResponse = {
  data: object;
};

export default {
  put({ path, body = {} }): Promise<QueryResponse> {
    return axios.put(`${HOST}${path}`, body);
  },
  get({ path, accessToken = '' }) {
    return axios(`${HOST}${path}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

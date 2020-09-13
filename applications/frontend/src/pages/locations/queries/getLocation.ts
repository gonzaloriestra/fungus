import axios from 'axios';

type QueryResponse = {
  data: object;
};

export default function getLocations({ id }): Promise<QueryResponse> {
  return axios.get(`http://localhost:3001/locations/${id}`);
};
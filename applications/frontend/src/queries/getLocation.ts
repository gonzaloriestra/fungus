import axios from 'axios';

type QueryResponse = {
  data: object;
};

export default function getLocation({ id }): Promise<QueryResponse> {
  return axios.get(`http://localhost:3001/locations/${id}`);
}

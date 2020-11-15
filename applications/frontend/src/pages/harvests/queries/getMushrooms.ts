import axios from 'axios';

type QueryResponse = {
  data: object;
};

export default function getMushrooms(): Promise<QueryResponse> {
  return axios.get('http://localhost:3001/mushrooms');
}

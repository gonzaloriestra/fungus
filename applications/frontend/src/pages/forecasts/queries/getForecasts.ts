import axios from 'axios';

type QueryResponse = {
  data: object;
};

export default function getForecasts(): Promise<QueryResponse> {
  return axios.get('http://localhost:3001/forecasts?date=2020-11-10');
}

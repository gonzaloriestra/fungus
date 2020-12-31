import axios from 'axios';

type QueryResponse = {
  data: { probability: string };
};

export default function makePrediction({ date, locationId, mushroomId }): Promise<QueryResponse> {
  return axios.get(`http://localhost:3001/locations/${locationId}/mushrooms/${mushroomId}/predictions?date=${date}`);
}

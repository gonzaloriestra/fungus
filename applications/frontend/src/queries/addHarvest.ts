import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

type QueryResponse = {
  data: object;
};

export default function addHarvest({ date, locationId, mushroomId, quantity }): Promise<QueryResponse> {
  const id = uuidv4();

  return axios.put(`http://localhost:3001/harvests/${id}`, { date, locationId, mushroomId, quantity });
}

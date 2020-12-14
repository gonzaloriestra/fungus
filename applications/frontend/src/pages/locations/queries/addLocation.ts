import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

type QueryResponse = {
  data: object;
};

export default function addLocation({ name, zone }): Promise<QueryResponse> {
  // To-Do generate uuid
  const id = uuidv4();

  return axios.put(`http://localhost:3001/locations/${id}`, { name, coordinates: zone });
}

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

type QueryResponse = {
  data: object;
};

export default function addLocation({ name, zone }): Promise<QueryResponse> {
  // To-Do generate uuid
  const id = uuidv4();

  return axios.put(`http://localhost:3001/locations/${id}`, { name, coordinates: zone }, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZDU3OGRlZS1hN2Q2LTRjMjItYWU4Ni1iOGMwZjc0OTQ5YTgifQ.OexChjJA8CE8w5PPwyIiIw9WwqpAPkVH_h97t4__qwY',
    },
  });
}

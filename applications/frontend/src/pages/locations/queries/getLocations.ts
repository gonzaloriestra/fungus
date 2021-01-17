import axios from 'axios';

type QueryResponse = {
  data: object;
};

export default function getLocations(): Promise<QueryResponse> {
  return axios.get('http://localhost:3001/locations', {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZDU3OGRlZS1hN2Q2LTRjMjItYWU4Ni1iOGMwZjc0OTQ5YTgifQ.OexChjJA8CE8w5PPwyIiIw9WwqpAPkVH_h97t4__qwY',
    },
  });
}

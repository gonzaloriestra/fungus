import axios from 'axios';

type QueryResponse = {
  data: object;
};

export default function getHarvestsByLocationId({ locationId }): Promise<QueryResponse> {
  return axios.get(`http://localhost:3001/locations/${locationId}/harvests`);
}

import { v4 as uuidv4 } from 'uuid';
import client from './client';

type QueryResponse = {
  data: object;
};

export default function addHarvest(harvest): Promise<QueryResponse> {
  const id = uuidv4();

  return client.put({ path: `/harvests/${id}`, body: harvest });
}

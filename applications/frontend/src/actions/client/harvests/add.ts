import { v4 as uuidv4 } from 'uuid';

import ClientFetcher from '../ClientFetcher';

export default async function add(harvest): Promise<void> {
  const id = uuidv4();

  await ClientFetcher.put(`/harvests/${id}`, { body: harvest });
}

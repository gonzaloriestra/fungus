import { v4 as uuidv4 } from 'uuid';

import ClientFetcher from '../clientSide/ClientFetcher';

export default async function addHarvest(harvest): Promise<void> {
  const id = uuidv4();

  await ClientFetcher.put(`/harvests/${id}`, { body: harvest });
}

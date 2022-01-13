import { v4 as uuidv4 } from 'uuid';

import Harvest from '../../../models/Harvest';

import ClientFetcher from '../ClientFetcher';

export default async function addHarvest(harvest: Harvest): Promise<void> {
  const id = uuidv4();

  await ClientFetcher.put(`/harvests/${id}`, { body: harvest });
}

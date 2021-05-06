import { v4 as uuidv4 } from 'uuid';

import fetcher from '../fetcher';

export default async function addHarvest(harvest): Promise<void> {
  const id = uuidv4();

  const response = await fetcher.put({ path: `/harvests/${id}`, body: harvest });

  if (!response.ok) {
    // To-Do custom exception here
    throw Error('Sommething happens feching the info!!!');
  }
}

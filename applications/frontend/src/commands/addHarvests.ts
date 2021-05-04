import { v4 as uuidv4 } from 'uuid';

import APIClient from '../pages/api/APIClient';

export default async function addHarvests(harvest): void {
  const id = uuidv4();

  const response = await APIClient.put({ path: `/harvests/${id}`, body: harvest });

  if (!response.ok) {
    // To-Do custom exception here
    throw Error('Sommething happens feching the info!!!');
  }
}

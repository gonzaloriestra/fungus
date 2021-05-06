import { v4 as uuidv4 } from 'uuid';

import fetcher from '../fetcher';

import Location from '../../models/Location';

export default async function addLocation(location: Location): void {
  const id = uuidv4();

  const response = await fetcher.put(`/locations/${id}`, { body: location });

  if (!response.ok) {
    // To-Do custom exception here
    throw Error('Sommething happens feching the info!!!');
  }
}

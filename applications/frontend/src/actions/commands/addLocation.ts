import { v4 as uuidv4 } from 'uuid';

import fetcher from '../fetcher';

import Location from '../../models/Location';

export default async function addLocation(location: Location): Promise<void> {
  const id = uuidv4();

  await fetcher.put(`/locations/${id}`, { body: location });
}

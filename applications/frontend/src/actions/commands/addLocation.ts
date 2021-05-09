import { v4 as uuidv4 } from 'uuid';

import Location from '../../models/Location';

import ClientFetcher from '../clientSide/ClientFetcher';

export default async function addLocation(location: Location): Promise<void> {
  const id = uuidv4();

  await ClientFetcher.put(`/locations/${id}`, { body: location });
}

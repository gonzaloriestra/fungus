import { v4 as uuidv4 } from 'uuid';

import APIClient from '../pages/api/APIClient';

import Location from '../models/Location';

export default function addLocation(location: Location): void {
  const id = uuidv4();

  APIClient.put({ path: `/locations/${id}`, body: location });
}

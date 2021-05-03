import { v4 as uuidv4 } from 'uuid';

import Location from '../models/Location';

export default function addLocation({ name, zone }: Location): void {
  const id = uuidv4();

  fetch(`http://localhost:3000/api/locations/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, zone }),
  });
}

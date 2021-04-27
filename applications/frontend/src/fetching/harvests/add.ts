import { v4 as uuidv4 } from 'uuid';

import APIClient from '../../pages/api/APIClient';

export default function add(harvest): void {
  const id = uuidv4();

  APIClient.put({ path: `/harvests/${id}`, body: harvest });
}

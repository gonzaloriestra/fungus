import { Given } from 'cucumber';
import faker from 'faker';
import assert from 'assert';

import client from './httpClient';

Given('a location with id {string} and {string} exist', async (id: string, details: string) => {
  const body = JSON.parse(details);

  const response = await client.put({ path: `/locations/${id}`, body });

  assert.strictEqual(response.status, 201);
});

Given('a location with id {string} already defined', async (id: string) => {
  const body = {
    name: faker.name.findName(),
    coordinates: [
      {
        latitude: '42.741599',
        longitude: '-4.885334',
      },
    ],
    weatherStationId: faker.random.uuid(),
  };

  const response = await client.put({ path: `/locations/${id}`, body });

  assert.strictEqual(response.status, 201);
});

Given('the location store empty', async () => {
  const response = await client.delete({ path: '/locations' });

  assert.strictEqual(response.status, 204);
});

import { Given } from 'cucumber';
import faker from 'faker';
import assert from 'assert';

import client from './httpClient';

Given(
  'a harvest of mushroom {string} with id {string} in the location {string}',
  async (mushroomId: string, harvestId: string, locationId: string) => {
    const body = {
      date: faker.date,
      mushroomId: mushroomId,
      locationId: locationId,
      quantity: faker.random.number({ min: 1, max: 5 }),
    };

    const response = await client.put({ path: `/harvests/${harvestId}`, body });

    assert.strictEqual(response.status, 201);
  },
);

Given(
  'a harvest of mushroom {string} with id {string} in the location {string} and date {string}',
  async (mushroomId: string, harvestId: string, locationId: string, date: string) => {
    const body = {
      date: new Date(date),
      mushroomId: mushroomId,
      locationId: locationId,
      quantity: faker.random.number({ min: 1, max: 5 }),
    };

    const response = await client.put({ path: `/harvests/${harvestId}`, body });

    assert.strictEqual(response.status, 201);
  },
);

Given('the harvest store empty', async () => {
  const response = await client.delete({ path: `/harvests` });

  assert.strictEqual(response.status, 204);
});

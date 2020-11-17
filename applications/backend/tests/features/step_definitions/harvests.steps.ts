import { Given } from 'cucumber';
import request from 'supertest';
import faker from 'faker';
import assert from 'assert';

import app from '../../../src/app';

Given(
  'a harvest of mushroom {string} with id {string} in the location {string}',
  async (mushroomId: string, harvestId: string, locationId: string) => {
    const body = {
      date: faker.date,
      mushroomId: mushroomId,
      locationId: locationId,
      quantity: faker.random.number({ min: 1, max: 5 }),
    };

    await request(app.listener).put(`/harvests/${harvestId}`).send(body);
  },
);

Given('the harvest store empty', async () => {
  const response = await request(app.listener).delete('/harvests').send();

  assert.strictEqual(response.status, 204);
});

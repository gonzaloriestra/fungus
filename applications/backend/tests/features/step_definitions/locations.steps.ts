import { Given } from 'cucumber';
import request from 'supertest';
import faker from 'faker';
import assert from 'assert';

import app from '../../../app';

Given('a location with id {string} already defined', async (id: string) => {
  const body = {
    name: faker.name.findName(),
    coordinates: [
      {
        latitude: '42.741599',
        longitude: '-4.885334',
      },
    ],
  };

  await request(app.listener).put(`/locations/${id}`).send(body);
});

Given('the location store empty', async () => {
  const response = await request(app.listener).delete('/locations').send();

  assert.strictEqual(response.status, 204);
});

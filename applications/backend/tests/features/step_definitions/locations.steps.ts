import { Given, Then } from 'cucumber';
import httpClient from 'supertest';
import faker from 'faker';
import assert from 'assert';

import app from '../../../src/app';

Given('a location with id {string} and {string} exist', async (id: string, details: string) => {
  const body = JSON.parse(details);

  await httpClient(app.listener).put(`/locations/${id}`).send(body);
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
  };

  await httpClient(app.listener).put(`/locations/${id}`).send(body);
});

Given('the location store empty', async () => {
  const response = await httpClient(app.listener).delete('/locations').send();

  assert.strictEqual(response.status, 204);
});

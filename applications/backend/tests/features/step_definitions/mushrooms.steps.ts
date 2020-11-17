import { Given } from 'cucumber';
import request from 'supertest';
import assert from 'assert';
import faker from 'faker';

import app from '../../../app';

Given('a mushroom with id {string} already defined', async (id: string) => {
  const body = {
    scientificName: faker.name.findName(),
  };

  await request(app.listener).put(`/mushrooms/${id}`).send(body);
});

Given('the mushroom store empty', async () => {
  const response = await request(app.listener).delete('/mushrooms').send();

  assert.strictEqual(response.status, 204);
});

import { Given } from 'cucumber';
import request from 'supertest';
import faker from 'faker';

import app from '../../../../../applications/backend/app';

Given('a mushroom with id {string} already defined', async (id: string) => {
  const body = {
    scientificName: faker.name.findName(),
  };

  await request(app.listener).put(`/mushrooms/${id}`).send(body);
});

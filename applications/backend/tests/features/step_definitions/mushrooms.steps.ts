import { Given } from 'cucumber';
import assert from 'assert';
import faker from 'faker';

import client from './httpClient';

Given('a mushroom with id {string} already defined', async (id: string) => {
  const body = {
    scientificName: faker.name.findName(),
  };

  const response = await client.put({ path: `/mushrooms/${id}`, body });

  assert.strictEqual(response.status, 201);
});

Given('the mushroom store empty', async () => {
  const response = await client.delete({ path: '/mushrooms' });

  assert.strictEqual(response.status, 204);
});

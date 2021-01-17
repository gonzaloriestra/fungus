import client from 'supertest';

import initialize from '../../../src/app';

// To-Do make it dynamic
const JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZDU3OGRlZS1hN2Q2LTRjMjItYWU4Ni1iOGMwZjc0OTQ5YTgifQ.OexChjJA8CE8w5PPwyIiIw9WwqpAPkVH_h97t4__qwY';

export default {
  get: async ({ path }: { path: string }): Promise<client.Response> => {
    const server = await initialize();

    return client(server.listener).get(path).set('Authorization', `Bearer ${JWT}`).send();
  },
  put: async ({ path, body }: { path: string; body: object }): Promise<client.Response> => {
    const server = await initialize();

    return client(server.listener).put(path).set('Authorization', `Bearer ${JWT}`).send(body);
  },
  delete: async ({ path }: { path: string }): Promise<client.Response> => {
    const server = await initialize();

    return client(server.listener).delete(path).send();
  },
};

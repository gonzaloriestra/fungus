import assert from 'assert';
import { Given, Then, When } from 'cucumber';
import request from 'supertest';

import app from '../../../../../../applications/fungus/backend/app';

let _request: request.Test;
let _response: request.Response;

Given(
  'A status code {int} from a PUT request already executed to {string} with body:',
  (status: number, route: string, body: string) => {
    request(app.listener).put(route).send(JSON.parse(body));
  },
);

When('I send a GET request to {string}', (route: string) => {
  _request = request(app.listener).get(route);
});

When('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(app.listener).put(route).send(JSON.parse(body));
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  assert.deepEqual(_response.body, {});
});

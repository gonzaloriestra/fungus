import assert from 'assert';
import { Then, When } from 'cucumber';
import request from 'supertest';

import app from '../../../../../applications/backend/app';

let _request: request.Test;
let _response: request.Response;

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

Then('the response should be:', (response: string) => {
  assert.deepEqual(_response.body, JSON.parse(response));
});

Then('the response should be a collection of {int} elements', (numberOfElements: string) => {
  assert.deepEqual(_response.body.length, numberOfElements);
});

Then('the response should contains an element with id {string}', (id: string) => {
  assert.ok(
    _response.body.find((element: { id: string }) => element.id === id),
    `The element with id ${id} does not exist`,
  );
});

Then('the response should be an element with id {string}', (id: string) => {
  assert.equal(_response.body.id, id);
});

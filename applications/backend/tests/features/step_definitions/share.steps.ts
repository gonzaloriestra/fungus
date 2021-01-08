import assert from 'assert';
import { Then, When } from 'cucumber';
import request from 'supertest';
import { isEmpty } from 'lodash';

import httpClient from './httpClient';

let _response: request.Response;

When('I send a GET request to {string}', async (path: string) => {
  _response = await httpClient.get({ path });
});

When('I send a PUT request to {string} with body:', async (path: string, details: string) => {
  const body = JSON.parse(details);

  _response = await httpClient.put({ path, body });
});

Then('the response should be {int} with payload:', async (status: number, response: string) => {
  assert.strictEqual(_response.status, status);

  assert.deepEqual(_response.body, JSON.parse(response));
});

Then('the response status code should be {int}', async (status: number) => {
  assert.strictEqual(_response.status, status);
});

Then('the response should be empty', () => {
  assert.equal(isEmpty(_response.body), true);
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

Then('the response should contain {string} not empty', (attribute: string) => {
  if (Array.isArray(_response.body[attribute])) {
    assert.notEqual(_response.body[attribute].lenght, 0);
  } else {
    assert.notEqual(_response.body[attribute], undefined);
  }
});

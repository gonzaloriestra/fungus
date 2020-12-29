export class ResponseWithoutData extends Error {
  constructor() {
    super(`No data received from the weather service`);
  }
}

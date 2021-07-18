export class WeatherServiceDoesNotWork extends Error {
  constructor() {
    super(`Weather service does not work`);
  }
}

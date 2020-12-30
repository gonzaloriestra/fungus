export class WeatherConditionNotSupported extends Error {
  constructor({ type }: { type: string }) {
    super(`Weather condition: ${type} is not supported`);
  }
}

import { Forecast } from '../../Domain/Forecast';

export class GenerateForecastsResponse {
  // To-Do How to avoid this definitions
  readonly data: { date: string; forecasts: Array<{ locationId: string; probability: string }> };

  constructor({ date, forecasts }: { date: Date; forecasts: Array<Forecast> }) {
    this.data = {
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      forecasts: forecasts.map((forecast) => ({
        locationId: forecast.locationId().value(),
        probability: forecast.probability().toString(),
      })),
    };
  }
}

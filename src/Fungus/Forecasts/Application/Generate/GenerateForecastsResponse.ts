import { Harvest } from '../../Domain/Harvest';

export class GenerateForecastsResponse {
  // To-Do How to avoid this definitions
  readonly data: Array<{ id: string; date: string; locationId: string; mushroomId?: string; quantity?: number }>;

  constructor(harvests: Array<Harvest>) {
    this.data = harvests.map((harvest) => ({
      id: harvest.id().value(),
      date: harvest.date().toString(),
      locationId: harvest.locationId().value(),
      mushroomId: harvest.mushroomId().value(),
      quantity: harvest.quantity(),
    }));
  }
}

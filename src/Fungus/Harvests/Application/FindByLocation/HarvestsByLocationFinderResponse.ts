import { Harvest } from '../../Domain/Harvest';

export class HarvestsByLocationFinderResponse {
  // To-Do How to avoid this definitions
  readonly data: Array<{ id: string; date: string; locationId: string; mushroomId?: string; quantity?: number }>;

  constructor(harvests: Array<Harvest>) {
    this.data = harvests.map((harvest) => ({
      id: harvest.id().value(),
      date: harvest.date().toString(),
      locationId: harvest.location().id().value(),
      mushroomId: harvest.mushroom()?.id().value(),
      quantity: harvest.quantity(),
    }));
  }
}

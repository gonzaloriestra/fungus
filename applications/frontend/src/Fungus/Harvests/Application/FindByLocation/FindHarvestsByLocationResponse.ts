import { Harvests, Primitives } from '../../Domain/Harvests';

export class FindHarvestsByLocationResponse {
  // To-Do use primitives directly instead of this
  readonly harvests: Primitives;

  constructor(harvests: Harvests) {
    this.harvests = harvests.toPrimitives();
  }
}

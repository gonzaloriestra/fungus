import { Harvests, Primitives } from '../../Domain/Harvests';

export class FindHarvestsByLocationResponse {
  // To-Do use primitives directly instead of this
  readonly data: Primitives;

  constructor(harvests: Harvests) {
    this.data = harvests.toPrimitives();
  }
}

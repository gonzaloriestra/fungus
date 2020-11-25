import { Harvests, Primitives } from '../../Domain/Harvests';

export class FindHarvestsByLocationResponse {
  readonly data: Primitives;

  constructor(harvests: Harvests) {
    // To-Do No sure if it is good here, delegate the definition of the response to the domain
    this.data = harvests.toPrimitives();
  }
}

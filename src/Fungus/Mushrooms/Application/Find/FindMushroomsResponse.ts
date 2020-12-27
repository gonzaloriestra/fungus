import { Primitives } from '../../Domain/Mushrooms';

export class FindMushroomsResponse {
  readonly mushrooms: Primitives;

  constructor(mushrooms: Primitives) {
    this.mushrooms = mushrooms;
  }
}

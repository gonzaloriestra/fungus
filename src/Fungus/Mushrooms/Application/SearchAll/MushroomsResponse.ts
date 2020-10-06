import { MushroomResponse } from './MushroomResponse';

export class MushroomsResponse {
  readonly mushrooms: Array<MushroomResponse>;

  constructor(mushrooms: Array<MushroomResponse>) {
    this.mushrooms = mushrooms;
  }
}

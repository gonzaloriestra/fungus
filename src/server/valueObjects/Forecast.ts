import { Location } from './Location';
import { Mushroom } from './Mushroom';

export class Forecast {
  location: Location;
  mushrooms: Array<Mushroom>;

  constructor({ location, mushrooms }: {location: Location, mushrooms: Array<Mushroom>}) {
    this.location = location;
    this.mushrooms = mushrooms;
  }

  getLocation() {
    return this.location;
  }

  getMushrooms() {
    return this.mushrooms;
  }
}

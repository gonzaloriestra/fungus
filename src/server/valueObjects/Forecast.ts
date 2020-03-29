import { Location } from '../Domain/Model/Location/Location';
import { Mushroom } from './Mushroom';

export class Forecast {
  location: Location;
  mushrooms: Array<Mushroom>;

  constructor({ location, mushrooms }: { location: Location; mushrooms: Array<Mushroom> }) {
    this.location = location;
    this.mushrooms = mushrooms;
  }

  getLocation(): Location {
    return this.location;
  }

  getMushrooms(): Mushroom {
    return this.mushrooms;
  }
}

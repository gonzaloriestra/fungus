import { Location } from '../../Locations/Domain/Location';
import { Mushroom } from '../../Mushrooms/Domain/Mushroom';

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

  getMushrooms(): Array<Mushroom> {
    return this.mushrooms;
  }
}

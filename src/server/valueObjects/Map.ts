import { Location } from './Location';

export class Map {
  locations: Array<Location>;

  constructor(
    { locations }: { locations: Array<Location> } = { locations: [] }
  ) {
    this.locations = locations;
  }

  includes(location: Location): boolean {
    return this.locations.includes(location);
  }

  getLocations(): Array<Location> {
    return this.locations;
  }
}

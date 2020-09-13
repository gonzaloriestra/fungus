import { LocationRepository } from '../Domain/LocationRepository';
import { LocationId } from '../Domain/LocationId';
import { Location } from '../Domain/Location';
import { Coordinate } from '../Domain/Coordinate';

const initialLocations: Array<Location> = [
  new Location({
    id: new LocationId('9aa0c161-109c-496e-bec1-e64356d251f5'),
    name: 'Camporredondo',
    coordinates: [
      new Coordinate({ longitude: 42.894653, latitude: -4.747328 }),
      new Coordinate({ longitude: 42.89631, latitude: -4.749127 }),
      new Coordinate({ longitude: 42.897237, latitude: -4.743661 }),
      new Coordinate({ longitude: 42.895283, latitude: -4.743812 }),
    ],
  }),
  new Location({
    id: new LocationId('c55d5235-c7c8-437d-b609-e15955f7867e'),
    name: 'Velilla',
    coordinates: [
      new Coordinate({ longitude: 42.829022, latitude: -4.849545 }),
      new Coordinate({ longitude: 42.829955, latitude: -4.842902 }),
      new Coordinate({ longitude: 42.824562, latitude: -4.844682 }),
      new Coordinate({ longitude: 42.8225, latitude: -4.848534 }),
    ],
  }),
];

export class InMemoryLocationRepository implements LocationRepository {
  locations: Array<Location>;

  constructor({ locations = initialLocations }: { locations?: Array<Location> } = {}) {
    console.log("TO BE REMOVED");
    this.locations = locations;
  }

  nextIdentity(): LocationId {
    return LocationId.create();
  }

  add(location: Location): void {
    this.locations.push(location);
  }

  findById(id: LocationId): Location | undefined {
    return this.locations.find((location) => location.id().equalTo(id));
  }

  all(): Array<Location> {
    return this.locations;
  }

  clean(): void {
    this.locations = [];
  }
}

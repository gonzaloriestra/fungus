import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';

import { LocationQuery } from '../../../../src/Fungus/Predictions/Domain/LocationQuery';
import { LocationView } from '../../../../src/Fungus/Predictions/Domain/LocationView';

export default class LocationQueryMock implements LocationQuery {
  private mockAll = jest.fn();
  private mockFindById = jest.fn();
  private locations: Array<LocationView> = [];
  private location?: LocationView = undefined;

  all(): Array<LocationView> {
    this.mockAll();
    return this.locations;
  }

  returnOnAll(locations: Array<LocationView>) {
    this.locations = locations;
  }

  assertAllHasBeenCalled() {
    expect(this.mockAll).toHaveBeenCalled();
  }

  findById(_: LocationId): LocationView | undefined {
    this.mockFindById();
    return this.location;
  }

  returnOnFindById(location?: LocationView): void {
    this.location = location;
  }

  assertFindByIdHasBeenCalled(): void {
    expect(this.mockFindById).toHaveBeenCalled();
  }
}

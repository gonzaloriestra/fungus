import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';

import { LocationQuery } from '../../../../src/Fungus/Predictions/Domain/LocationQuery';
import { LocationView } from '../../../../src/Fungus/Predictions/Domain/LocationView';

import LocationViewMother from './LocationViewMother';

export default class LocationQueryMock implements LocationQuery {
  private mockAll = jest.fn();
  private mockFindById = jest.fn();
  private locations: Array<LocationView> = [];
  private location: LocationView = LocationViewMother.random();

  all(): Array<LocationView> {
    this.mockAll();
    return this.locations;
  }

  findById(_: LocationId): LocationView {
    this.mockFindById();
    return this.location;
  }

  returnOnFindById(location: LocationView): void {
    this.location = location;
  }

  assertFindByIdHasBeenCalled(): void {
    expect(this.mockFindById).toHaveBeenCalled();
  }
}

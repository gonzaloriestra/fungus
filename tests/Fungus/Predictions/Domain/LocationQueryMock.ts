import { LocationQuery } from '../../../../src/Fungus/Predictions/Domain/LocationQuery';
import { LocationView } from '../../../../src/Fungus/Predictions/Domain/LocationView';

export default class LocationQueryMock implements LocationQuery {
  private mockAll = jest.fn();
  private locations: Array<LocationView> = [];

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
}

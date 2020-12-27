import { MethodNotImplemented } from '../../../../src/Fungus/Shared/Domain/MethodNotImplemented';
import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';

import { LocationRepository } from '../../../../src/Fungus/Locations/Domain/LocationRepository';
import { Location } from '../../../../src/Fungus/Locations/Domain/Location';

export default class LocationRepositoryMock implements LocationRepository {
  private mockFindById = jest.fn();
  private location?: Location = undefined;

  findById(_: LocationId): Location | undefined {
    this.mockFindById();
    return this.location;
  }

  returnOnFindById(location: Location) {
    this.location = location;
  }

  assertFindByIdHasBeenCalled() {
    expect(this.mockFindById).toHaveBeenCalled();
  }

  all(): Array<Location> {
    throw new MethodNotImplemented();
  }

  add(_: Location): void {
    throw new MethodNotImplemented();
  }

  clean(): void {
    throw new MethodNotImplemented();
  }
}

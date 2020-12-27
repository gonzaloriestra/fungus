import { MethodNotImplemented } from '../../../../src/Fungus/Shared/Domain/MethodNotImplemented';
import { LocationId } from '../../../../src/Fungus/Shared/Domain/Locations/LocationId';

import { LocationRepository } from '../../../../src/Fungus/Locations/Domain/LocationRepository';
import { Location } from '../../../../src/Fungus/Locations/Domain/Location';

export class LocationRepositoryMock implements LocationRepository {
  private mockFindById = jest.fn();
  private mockClean = jest.fn();
  private location?: Location = undefined;

  findById(_: LocationId): Location | undefined {
    this.mockFindById();
    return this.location;
  }

  returnOnFindById(location: Location): void {
    this.location = location;
  }

  assertFindByIdHasBeenCalled(): void {
    expect(this.mockFindById).toHaveBeenCalled();
  }

  all(): Array<Location> {
    throw new MethodNotImplemented('LocationRepositoryMock.all');
  }

  add(_: Location): void {
    throw new MethodNotImplemented('LocationRepositoryMock.add');
  }

  clean(): void {
    this.mockClean();
  }

  assertCleanHasBeenCalled(): void {
    expect(this.mockClean).toHaveBeenCalled();
  }
}

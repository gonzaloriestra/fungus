import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';
import { UserId } from '../../../../src/Fungus/Shared/Domain/UserId';

import { LocationRepository } from '../../../../src/Fungus/Locations/Domain/LocationRepository';
import { Location } from '../../../../src/Fungus/Locations/Domain/Location';
import { Locations } from '../../../../src/Fungus/Locations/Domain/Locations';

export class LocationRepositoryMock implements LocationRepository {
  private mockAdd = jest.fn();
  private mockClean = jest.fn();
  private mockAll = jest.fn();
  private mockFindById = jest.fn();
  private mockFindByUserId = jest.fn();

  private location?: Location = undefined;
  private locations: Locations = new Locations();

  findById(_: LocationId): Location | undefined {
    this.mockFindById();
    return this.location;
  }

  returnOnFindById(location?: Location): void {
    this.location = location;
  }

  assertFindByIdHasBeenCalled(): void {
    expect(this.mockFindById).toHaveBeenCalled();
  }

  findByUserId(_: UserId): Locations | undefined {
    this.mockFindByUserId();
    return this.locations;
  }

  returnOnFindByUserId(locations?: Locations): void {
    this.locations = locations || new Locations();
  }

  assertFindByUserIdHasBeenCalled(): void {
    expect(this.mockFindByUserId).toHaveBeenCalled();
  }

  all(): Locations {
    this.mockAll();
    return this.locations;
  }

  returnOnAll(locations: Locations): void {
    this.locations = locations;
  }

  assertAllHasBeenCalled(): void {
    expect(this.mockAll).toHaveBeenCalled();
  }

  add(_: Location): void {
    this.mockAdd();
  }

  assertAddHasBeenCalled(): void {
    expect(this.mockAdd).toHaveBeenCalled();
  }

  clean(): void {
    this.mockClean();
  }

  assertCleanHasBeenCalled(): void {
    expect(this.mockClean).toHaveBeenCalled();
  }
}

import LocationByIdFinder from '../../../../../src/Fungus/Locations/Application/FindById/LocationByIdFinder';
import { LocationDoesNotExist } from '../../../../../src/Fungus/Locations/Domain/LocationDoesNotExist';

import { LocationRepositoryMock } from '../../Domain/LocationRepositoryMock';
import LocationMother from '../../../Predictions/Domain/LocationMother';

describe('LocationByIdFinder', () => {
  let mockLocationRepository: LocationRepositoryMock;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
  });

  it('should return existing location successfully', () => {
    const location = LocationMother.random();
    mockLocationRepository.returnOnFindById(location);

    const subject = new LocationByIdFinder(mockLocationRepository);

    const response = subject.run({ locationId: location.id() });

    mockLocationRepository.assertFindByIdHasBeenCalled();
    expect(response.location.id).toEqual(location.id().value());
  });

  it('should throw exception where the location does not exist', () => {
    const location = LocationMother.random();
    mockLocationRepository.returnOnFindById(undefined);
    const subject = new LocationByIdFinder(mockLocationRepository);

    expect(() => subject.run({ locationId: location.id() })).toThrow(LocationDoesNotExist);

    mockLocationRepository.assertFindByIdHasBeenCalled();
  });
});

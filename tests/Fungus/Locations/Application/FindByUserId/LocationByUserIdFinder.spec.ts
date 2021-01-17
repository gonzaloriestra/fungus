import { UserId } from '../../../../../src/Fungus/Shared/Domain/UserId';

import LocationsByUserIdFinder from '../../../../../src/Fungus/Locations/Application/FindByUserId/LocationsByUserIdFinder';
import { Locations } from '../../../../../src/Fungus/Locations/Domain/Locations';

import { LocationRepositoryMock } from '../../Domain/LocationRepositoryMock';
import LocationMother from '../../Domain/LocationMother';

describe('LocationByUserIdFinder', () => {
  let mockLocationRepository: LocationRepositoryMock;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
  });

  it('should return a locations list', () => {
    const userId = UserId.create();
    const locationOne = LocationMother.create({ userId });
    const locationTwo = LocationMother.create({ userId });
    mockLocationRepository.returnOnFindByUserId(new Locations({ locations: [locationOne, locationTwo] }));
    const subject = new LocationsByUserIdFinder(mockLocationRepository);

    const response = subject.run({ userId });

    mockLocationRepository.assertFindByUserIdHasBeenCalled();
    expect(response.locations.length).toEqual(2);
  });

  it('should return an empty list of location if there are any', () => {
    mockLocationRepository.returnOnFindByUserId(undefined);
    const subject = new LocationsByUserIdFinder(mockLocationRepository);

    const response = subject.run({ userId: UserId.create() });

    mockLocationRepository.assertFindByUserIdHasBeenCalled();
    expect(response.locations.length).toEqual(0);
  });
});

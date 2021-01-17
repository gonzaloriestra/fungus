import LocationsFinder from '../../../../../src/Fungus/Locations/Application/Find/LocationsFinder';

import { Locations } from '../../../../../src/Fungus/Locations/Domain/Locations';

import { LocationRepositoryMock } from '../../Domain/LocationRepositoryMock';
import LocationMother from '../../Domain/LocationMother';

describe('LocationsFinder', () => {
  let mockLocationRepository: LocationRepositoryMock;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
  });

  it('should return all existing locations successfully', () => {
    const locationOne = LocationMother.random();
    const locationTwo = LocationMother.random();
    mockLocationRepository.returnOnAll(new Locations({ locations: [locationOne, locationTwo] }));

    const subject = new LocationsFinder(mockLocationRepository);

    const response = subject.run();

    mockLocationRepository.assertAllHasBeenCalled();
    expect(response.locations.length).toEqual(2);
  });
});

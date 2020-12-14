import { InMemoryLocationRepository } from '../../../../../src/Fungus/Locations/Infrastructure/InMemoryLocationRepository';

import { LocationRepository } from '../../../../../src/Fungus/Locations/Domain/LocationRepository';
import LocationMother from '../../../Locations/Domain/LocationMother';
import LocationsFinder from '../../../../../src/Fungus/Locations/Application/Find/LocationsFinder';

describe('LocationsFinder', () => {
  it('should return all existing locations successfully', () => {
    // To-Do instead a InMemory, it should be a mock
    const locationRepository: LocationRepository = new InMemoryLocationRepository();
    const locationOne = LocationMother.random();
    locationRepository.add(locationOne);
    const locationTwo = LocationMother.random();
    locationRepository.add(locationTwo);

    const subject = new LocationsFinder(locationRepository);

    const response = subject.run();

    expect(response.locations.length).toEqual(2);
  });
});

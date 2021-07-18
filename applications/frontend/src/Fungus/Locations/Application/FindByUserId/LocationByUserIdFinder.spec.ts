import { UserId } from '../../../Shared/Domain/UserId';
import { locationRepository } from '../../Infrastructure';

import LocationMother from '../../Domain/LocationMother.spec';

import LocationsByUserIdFinder from './LocationsByUserIdFinder';

describe('LocationByUserIdFinder', () => {
  beforeEach(() => {
    locationRepository.clean();
  });

  it('should return a locations list', () => {
    const userId = UserId.create();

    const locationOne = LocationMother.create({ userId });
    const locationTwo = LocationMother.create({ userId });
    locationRepository.add(locationOne);
    locationRepository.add(locationTwo);

    const subject = new LocationsByUserIdFinder(locationRepository);

    const response = subject.run({ userId });

    expect(response.locations.length).toEqual(2);
  });

  it('should return an empty list of location if there are any', () => {
    const subject = new LocationsByUserIdFinder(locationRepository);

    const response = subject.run({ userId: UserId.create() });

    expect(response.locations.length).toEqual(0);
  });
});

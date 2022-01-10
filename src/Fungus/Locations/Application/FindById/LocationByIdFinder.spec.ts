import { LocationId } from '../../../Shared/Domain/LocationId';
import { LocationDoesNotExist } from '../../../Shared/Domain/LocationDoesNotExist';

import { locationRepository } from '../../Infrastructure';
import LocationMother from '../../Domain/LocationMother';

import LocationByIdFinder from './LocationByIdFinder';

describe('LocationByIdFinder', () => {
  beforeEach(() => {
    locationRepository.clean();
  });

  afterAll(() => {
    locationRepository.clean();
  });

  it('should return existing location successfully', () => {
    const locationId = LocationId.create();
    const location = LocationMother.create({ id: locationId });
    locationRepository.add(location);
    const subject = new LocationByIdFinder(locationRepository);

    const response = subject.run({ locationId });

    expect(response.location.id).toEqual(location.id().value());
  });

  it('should throw exception where the location does not exist', () => {
    const locationId = LocationId.create();
    const subject = new LocationByIdFinder(locationRepository);

    expect(() => subject.run({ locationId })).toThrow(LocationDoesNotExist);
  });
});

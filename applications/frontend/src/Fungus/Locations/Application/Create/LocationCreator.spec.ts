import { weatherStationRepository } from '../../../Shared/Infrastructure';
import { LocationId } from '../../../Shared/Domain/LocationId';
import { UserId } from '../../../Shared/Domain/UserId';

import { locationRepository } from '../../Infrastructure';

import ZoneMother from '../../Domain/ZoneMother';
import LocationMother from '../../Domain/LocationMother';
import { Location } from '../../Domain/Location';
import { LocationAlreadyExist } from '../../Domain/LocationAlreadyExist';

import LocationCreator from './LocationCreator';

describe('LocationCreator', () => {
  beforeEach(() => {
    locationRepository.clean();
  });

  afterAll(() => {
    locationRepository.clean();
  });

  it('should create a new location executing all preconditions', () => {
    const locationId = LocationId.create();
    const subject = new LocationCreator(locationRepository, weatherStationRepository);

    subject.run({
      id: locationId,
      name: 'Pinar de Guardo',
      zone: ZoneMother.random(),
      userId: UserId.create(),
    });

    expect(locationRepository.findById(locationId)).toBeInstanceOf(Location);
  });

  it('should not create existing location', () => {
    const location = LocationMother.random();
    locationRepository.add(location);
    const subject = new LocationCreator(locationRepository, weatherStationRepository);

    expect(() =>
      subject.run({ id: location.id(), name: location.name(), zone: location.zone(), userId: UserId.create() }),
    ).toThrow(LocationAlreadyExist);
  });
});

import { LocationId } from '../../../../../src/Fungus/Shared/Domain/LocationId';
import { LocationAlreadyExist } from '../../../../../src/Fungus/Locations/Domain/LocationAlreadyExist';

import { LocationCreator } from '../../../../../src/Fungus/Locations/Application/Create/LocationCreator';

import ZoneMother from '../../Domain/ZoneMother';
import LocationMother from '../../../Predictions/Domain/LocationMother';
import WeatherStationRepositoryMock from '../../../Predictions/Domain/WeatherStationRepositoryMock';
import { LocationRepositoryMock } from '../../Domain/LocationRepositoryMock';

describe('LocationCreator', () => {
  let mockLocationRepository: LocationRepositoryMock;
  let mockWeatherStationRepository: WeatherStationRepositoryMock;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
    mockWeatherStationRepository = new WeatherStationRepositoryMock();
  });

  it('should create a new location executing all preconditions', () => {
    const subject = new LocationCreator(mockLocationRepository, mockWeatherStationRepository);

    subject.run({ id: LocationId.create(), name: 'Pinar de Guardo', zone: ZoneMother.random() });

    mockLocationRepository.assertFindByIdHasBeenCalled();
    mockLocationRepository.assertAddHasBeenCalled();
    mockWeatherStationRepository.assertFindByHasBeenCalled();
  });

  it('should not create existing location', () => {
    const location = LocationMother.random();
    mockLocationRepository.returnOnFindById(location);
    const subject = new LocationCreator(mockLocationRepository, mockWeatherStationRepository);

    expect(() => subject.run({ id: location.id(), name: location.name(), zone: location.zone() })).toThrow(
      LocationAlreadyExist,
    );

    mockLocationRepository.assertFindByIdHasBeenCalled();
  });
});

import Date from '../../../../../src/Fungus/Shared/Domain/Date';

import { MushroomId } from '../../../../../src/Fungus/Shared/Domain/Mushrooms/MushroomId';
import { LocationId } from '../../../../../src/Fungus/Shared/Domain/Locations/LocationId';

import Predictor from '../../../../../src/Fungus/Locations/Application/MakePrediction/Predictor';

import WeatherConditionRepositoryMock from '../../Domain/WeatherConditionRepositoryMock';
import WeatherConditionsMother from '../../Domain/WeatherConditionsMother';
import WeatherStationRepositoryMock from '../../Domain/WeatherStationRepositoryMock';
import WeatherStationMother from '../../Domain/WeatherStationMother';
import { LocationRepositoryMock } from '../../Domain/LocationRepositoryMock';
import LocationMother from '../../Domain/LocationMother';

describe('Predictor', () => {
  let mockLocationRepository: LocationRepositoryMock;
  let mockWeatherConditionRepository: WeatherConditionRepositoryMock;
  let mockWeatherStationRepository: WeatherStationRepositoryMock;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
    mockWeatherConditionRepository = new WeatherConditionRepositoryMock();
    mockWeatherStationRepository = new WeatherStationRepositoryMock();
  });

  it('should return a prediction of a mushroom sprout in a location', () => {
    const predictionDate = '2020-12-19';
    mockLocationRepository.returnOnFindById(LocationMother.random());
    mockWeatherConditionRepository.returnOnFindByMushroom(WeatherConditionsMother.random());
    mockWeatherStationRepository.returnOnFindBy(WeatherStationMother.random());
    const subject = new Predictor(mockLocationRepository, mockWeatherStationRepository, mockWeatherConditionRepository);

    const response = subject.run({
      date: new Date(predictionDate),
      mushroomId: MushroomId.create(),
      locationId: LocationId.create(),
    });

    mockLocationRepository.assertFindByIdHasBeenCalled();
    mockWeatherConditionRepository.assertFindByMushroomHasBeenCalled();
    mockWeatherStationRepository.assertFindByHasBeenCalled();
    expect(response.data.probability).toBeDefined();
  });
});

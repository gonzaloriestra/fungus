import Date from '../../../../../src/Fungus/Shared/Domain/Date';

import { MushroomId } from '../../../../../src/Fungus/Shared/Domain/MushroomId';
import { LocationId } from '../../../../../src/Fungus/Shared/Domain/LocationId';

import Predictor from '../../../../../src/Fungus/Locations/Application/MakePrediction/Predictor';

import WeatherConditionRepositoryMock from '../../Domain/WeatherConditionRepositoryMock';
import WeatherConditionsMother from '../../Domain/WeatherConditionsMother';
import WeatherStationRepositoryMock from '../../Domain/WeatherStationRepositoryMock';
import WeatherStationMother from '../../Domain/WeatherStationMother';

describe('Predictor', () => {
  let mockWeatherConditionRepository: WeatherConditionRepositoryMock;
  let mockWeatherStationRepository: WeatherStationRepositoryMock;

  beforeEach(() => {
    mockWeatherConditionRepository = new WeatherConditionRepositoryMock();
    mockWeatherStationRepository = new WeatherStationRepositoryMock();
  });

  it('should return a prediction of a mushroom sprout in a location', () => {
    const predictionDate = '2020-12-19';
    mockWeatherConditionRepository.returnOnFindByMushroom(WeatherConditionsMother.random());
    mockWeatherStationRepository.returnOnFindByLocation(WeatherStationMother.random());
    const subject = new Predictor(mockWeatherStationRepository, mockWeatherConditionRepository);

    const response = subject.run({
      date: new Date(predictionDate),
      mushroomId: MushroomId.create(),
      locationId: LocationId.create(),
    });

    mockWeatherConditionRepository.assertFindByMushroomHasBeenCalled();
    mockWeatherStationRepository.assertFindByLocationHasBeenCalled();
    expect(response.data.probability).toBeDefined();
  });
});

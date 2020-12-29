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
import { WeatherService } from '../../../../../src/Fungus/Locations/Domain/WeatherStations/WeatherService';
import { AEMETWeatherService } from '../../../../../src/Fungus/Locations/Infrastructure/WeatherStations/AEMETWeatherService';

describe('Predictor', () => {
  let mockLocationRepository: LocationRepositoryMock;
  let mockWeatherConditionRepository: WeatherConditionRepositoryMock;
  let mockWeatherStationRepository: WeatherStationRepositoryMock;
  let weatherService: WeatherService;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
    mockWeatherConditionRepository = new WeatherConditionRepositoryMock();
    mockWeatherStationRepository = new WeatherStationRepositoryMock();
    // To-Do Mock the service
    weatherService = new AEMETWeatherService();
  });

  it('should return a prediction of a mushroom sprout in a location', async () => {
    const predictionDate = '2020-11-20';
    mockLocationRepository.returnOnFindById(LocationMother.random());
    mockWeatherConditionRepository.returnOnFindByMushroom(
      WeatherConditionsMother.create({
        type: 'accumulatedPrecipitation',
        // @ts-ignore
        mushroomId: '0cfd076b-a46f-48dc-a734-2fa87b31a751',
        accumulation: 20,
        daysRange: 30,
        daysBefore: 1,
      }),
    );
    mockWeatherStationRepository.returnOnFindBy(WeatherStationMother.create({ externalId: '2235U' }));
    const subject = new Predictor(
      mockLocationRepository,
      mockWeatherStationRepository,
      mockWeatherConditionRepository,
      weatherService,
    );

    const response = await subject.run({
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

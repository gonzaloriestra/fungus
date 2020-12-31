import Date from '../../../../../src/Fungus/Shared/Domain/Date';

import { MushroomId } from '../../../../../src/Fungus/Shared/Domain/MushroomId';
import { LocationId } from '../../../../../src/Fungus/Shared/Domain/LocationId';

import Predictor from '../../../../../src/Fungus/Predictions/Application/Make/Predictor';

import WeatherConditionRepositoryMock from '../../Domain/WeatherConditionRepositoryMock';
import WeatherConditionsMother from '../../Domain/WeatherConditionsMother';
import WeatherStationRepositoryMock from '../../Domain/WeatherStationRepositoryMock';
import WeatherStationMother from '../../Domain/WeatherStationMother';
import { LocationRepositoryMock } from '../../../Locations/Domain/LocationRepositoryMock';
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
    const subject = new Predictor(mockLocationRepository, mockWeatherStationRepository, mockWeatherConditionRepository);

    const response = await subject.run({
      date: new Date(predictionDate),
      mushroomId: MushroomId.create(),
      locationId: LocationId.create(),
    });

    mockLocationRepository.assertFindByIdHasBeenCalled();
    mockWeatherConditionRepository.assertFindByMushroomHasBeenCalled();
    mockWeatherStationRepository.assertFindByHasBeenCalled();
    expect(response.prediction.probability).toBeDefined();
  });
});

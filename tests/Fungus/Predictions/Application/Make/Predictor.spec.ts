import Date from '../../../../../src/Fungus/Shared/Domain/Date';
import { MushroomId } from '../../../../../src/Fungus/Shared/Domain/MushroomId';
import { LocationId } from '../../../../../src/Fungus/Shared/Domain/LocationId';

import Predictor from '../../../../../src/Fungus/Predictions/Application/Make/Predictor';

import WeatherStationRepositoryMock from '../../Domain/WeatherStationRepositoryMock';
import WeatherStationMother from '../../Domain/WeatherStationMother';
import { LocationRepositoryMock } from '../../../Locations/Domain/LocationRepositoryMock';
import LocationMother from '../../../Locations/Domain/LocationMother';
import ConditionRepositoryMock from '../../Domain/ConditionRepositoryMock';
import ConditionsMother from '../../Domain/ConditionsMother';

describe('Predictor', () => {
  let mockLocationRepository: LocationRepositoryMock;
  let mockConditionRepository: ConditionRepositoryMock;
  let mockWeatherStationRepository: WeatherStationRepositoryMock;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
    mockConditionRepository = new ConditionRepositoryMock();
    mockWeatherStationRepository = new WeatherStationRepositoryMock();
  });

  it.skip('should return a prediction of a mushroom sprout in a location', async () => {
    const predictionDate = '2020-11-20';
    mockLocationRepository.returnOnFindById(LocationMother.random());
    mockConditionRepository.returnOnFindByMushroom(
      ConditionsMother.create({
        type: 'accumulatedPrecipitation',
        // @ts-ignore
        mushroomId: '0cfd076b-a46f-48dc-a734-2fa87b31a751',
        accumulation: 20,
        daysRange: 30,
        daysBefore: 1,
      }),
    );
    mockWeatherStationRepository.returnOnFindBy(WeatherStationMother.create({ externalId: '2235U' }));
    const subject = new Predictor(mockLocationRepository, mockWeatherStationRepository, mockConditionRepository);

    const response = await subject.run({
      date: new Date(predictionDate),
      mushroomId: MushroomId.create(),
      locationId: LocationId.create(),
    });

    mockLocationRepository.assertFindByIdHasBeenCalled();
    mockConditionRepository.assertFindByMushroomHasBeenCalled();
    mockWeatherStationRepository.assertFindByHasBeenCalled();
    expect(response.prediction.probability).toBeDefined();
  });
});

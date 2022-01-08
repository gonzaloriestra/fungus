import Date from '../../../Shared/Domain/Date';
import { MushroomId } from '../../../Shared/Domain/MushroomId';
import { LocationId } from '../../../Shared/Domain/LocationId';
import { weatherStationRepository } from '../../../Shared/Infrastructure';

import { conditionRepository, locationQuery } from '../../Infrastructure';

import Predictor from './Predictor';

describe('Predictor', () => {
  it('should return a prediction of a mushroom sprout in a location', async () => {
    const predictionDate = '2020-11-20';
    const subject = new Predictor(locationQuery, weatherStationRepository, conditionRepository);

    const response = await subject.run({
      date: new Date(predictionDate),
      mushroomId: MushroomId.create(),
      locationId: LocationId.create(),
    });

    expect(response.prediction.probability).toBeDefined();
  });
});

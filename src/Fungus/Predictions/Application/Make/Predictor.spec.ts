// ToDo: From other repository
import LocationMother from '../../../Locations/Domain/LocationMother';
import { locationRepository } from '../../../Locations/Infrastructure';

import { weatherStationRepository } from '../../../Shared/Infrastructure';
import { MushroomId } from '../../../Shared/Domain/MushroomId';
import Date from '../../../Shared/Domain/Date';

import { conditionRepository, locationQuery } from '../../Infrastructure';

import Predictor from './Predictor';

describe('Predictor', () => {
  it('should return a prediction of a mushroom sprout in a location', async () => {
    const predictionDate = '2020-11-20';
    const location = LocationMother.random();
    locationRepository.add(location);
    const subject = new Predictor(locationQuery, weatherStationRepository, conditionRepository);

    const response = await subject.run({
      date: new Date(predictionDate),
      mushroomId: MushroomId.create(),
      locationId: location.id(),
    });

    expect(response.prediction.probability).toBeDefined();
  });

  it('should return expection LocationDoesNotExist when the location has not been defined', () => {
    // ToDo
  });

  it('should return a prediction 0 for a specific date, location and mushrooms without myco conditions', () => {
    // ToDo
  });
});

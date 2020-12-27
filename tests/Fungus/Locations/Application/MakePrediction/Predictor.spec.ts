import Date from '../../../../../src/Fungus/Shared/Domain/Date';
import { MushroomId } from '../../../../../src/Fungus/Shared/Domain/MushroomId';

import Predictor from '../../../../../src/Fungus/Locations/Application/MakePrediction/Predictor';

import MushroomQueryMock from '../../../Shared/Application/Mushrooms/MushroomQueryMock';
import MushroomViewMother from '../../../Shared/Application/Mushrooms/MushroomViewMother';
import LocationRepositoryMock from '../../Domain/LocationRepositoryMock';
import LocationMother from '../../Domain/LocationMother';

describe('Predictor', () => {
  let mockLocationRepository: LocationRepositoryMock;
  let mockMushroomQuery: MushroomQueryMock;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
    mockMushroomQuery = new MushroomQueryMock();
  });

  it('should return a prediction of a mushroom sprout in a location', () => {
    const predictionDate = '2020-12-19';
    const mushroom = MushroomViewMother.random();
    const location = LocationMother.random();
    mockMushroomQuery.returnOnFindById(mushroom);
    mockLocationRepository.returnOnFindById(location);

    const subject = new Predictor(mockMushroomQuery, mockLocationRepository);

    const response = subject.run({
      date: new Date(predictionDate),
      mushroomId: new MushroomId(mushroom.id()),
      locationId: location.id(),
    });

    mockMushroomQuery.assertFindByIdHasBeenCalled();
    mockLocationRepository.assertFindByIdHasBeenCalled();
    expect(response.data.probability).toBeDefined();
  });
});

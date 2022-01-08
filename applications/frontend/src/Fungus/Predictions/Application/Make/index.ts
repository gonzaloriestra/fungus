import { locationQuery, weatherStationRepository, conditionRepository } from '../../Infrastructure';

import Predictor from './Predictor';

export default new Predictor(locationQuery, weatherStationRepository, conditionRepository);

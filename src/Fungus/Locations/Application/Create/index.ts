import { locationRepository } from '../../Infrastructure';
import { weatherStationRepository } from '../../../Shared/Infrastructure';

import LocationCreator from './LocationCreator';

export default new LocationCreator(locationRepository, weatherStationRepository);

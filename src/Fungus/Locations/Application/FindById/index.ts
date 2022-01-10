import { locationRepository } from '../../Infrastructure';

import LocationByIdFinder from './LocationByIdFinder';

export default new LocationByIdFinder(locationRepository);

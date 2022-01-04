import { harvestRepository } from '../../Infrastructure';
// ToDo: Importing here element from other modules
import { mushroomRepository } from '../../../Mushrooms/Infrastructure';
import { locationRepository } from '../../../Locations/Infrastructure';

import HarvestCreator from './HarvestCreator';

export default new HarvestCreator(harvestRepository, mushroomRepository, locationRepository);

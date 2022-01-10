import { harvestRepository } from '../../Infrastructure';

import HarvestsByLocationFinder from './HarvestsByLocationFinder';

export default new HarvestsByLocationFinder(harvestRepository);

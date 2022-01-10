import LocationsByUserIdFinder from './LocationsByUserIdFinder';
import { locationRepository } from '../../Infrastructure';

export default new LocationsByUserIdFinder(locationRepository);

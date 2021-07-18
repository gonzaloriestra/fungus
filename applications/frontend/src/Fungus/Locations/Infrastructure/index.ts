import { LocationRepository } from '../Domain/LocationRepository';

import { FileLocationRepository } from './FileLocationRepository';

let locationRepository: LocationRepository;

const env = process.env.NODE_ENV || 'development';

if (env === 'test') {
  locationRepository = new FileLocationRepository({ filePath: 'database/locations.spec.txt' });
} else {
  locationRepository = new FileLocationRepository();
}

export { locationRepository };

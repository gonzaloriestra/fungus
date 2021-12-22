import { HarvestRepository } from '../Domain/HarvestRepository';

import { FileHarvestRepository } from './FileHarvestRepository';

let harvestRepository: HarvestRepository;

const env = process.env.NODE_ENV || 'development';

if (env === 'test') {
  harvestRepository = new FileHarvestRepository({ filePath: 'database/harvests.spec.txt' });
} else {
  harvestRepository = new FileHarvestRepository();
}

export { harvestRepository };

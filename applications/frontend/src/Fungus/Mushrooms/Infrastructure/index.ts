import { MushroomRepository } from '../Domain/MushroomRepository';

import { FileMushroomRepository } from './FileMushroomRepository';

let mushroomRepository: MushroomRepository;

const env = process.env.NODE_ENV || 'development';

if (env === 'test') {
  mushroomRepository = new FileMushroomRepository({ filePath: 'database/mushrooms.spec.txt' });
} else {
  mushroomRepository = new FileMushroomRepository();
}

export { mushroomRepository };

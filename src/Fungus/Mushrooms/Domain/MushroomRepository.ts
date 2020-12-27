import { MushroomId } from '../../Shared/Domain/MushroomId';

import { Mushroom } from './Mushroom';

export interface MushroomRepository {
  add: (mushroom: Mushroom) => void;
  findById: (id: MushroomId) => Mushroom | undefined;
  findByScientificName: (scientificName: string) => Mushroom | undefined;
  all: () => Array<Mushroom>;
  clean: () => void;
}

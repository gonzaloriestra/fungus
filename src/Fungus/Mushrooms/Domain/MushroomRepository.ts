import { MushroomId } from '../../Shared/Domain/MushroomId';

import { Mushroom } from './Mushroom';
import { Mushrooms } from './Mushrooms';

export interface MushroomRepository {
  add: (mushroom: Mushroom) => void;
  findById: (id: MushroomId) => Mushroom | undefined;
  findByScientificName: (scientificName: string) => Mushroom | undefined;
  all: () => Mushrooms;
  clean: () => void;
}

import { Mushroom } from './Mushroom';
import { MushroomId } from './MushroomId';

export interface MushroomRepository {
  nextIdentity: () => MushroomId;
  add: (mushroom: Mushroom) => void;
  findById: (id: MushroomId) => Mushroom | undefined;
  filterBy: ({ scientificName }: { scientificName?: string }) => Array<Mushroom>;
}

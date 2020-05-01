import { Mushroom } from './Mushroom';
import { MushroomId } from './MushroomId';

export interface MushroomRepository {
  nextIdentity: () => MushroomId;
  add: (mushroom: Mushroom) => void;
  filterBy: ({ scientificName }: { scientificName?: string }) => Array<Mushroom>;
}

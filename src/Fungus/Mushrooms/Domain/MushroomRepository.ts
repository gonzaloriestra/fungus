import { Mushroom } from './Mushroom';
import { MushroomId } from '../../Shared/Domain/MushroomId';

export interface MushroomRepository {
  add: (mushroom: Mushroom) => void;
  // To-Do implement the criteria pattern
  findById: (id: MushroomId) => Mushroom | undefined;
  filterBy: ({ scientificName }: { scientificName?: string }) => Array<Mushroom>;
  // To-Do rename for all
  searchAll: () => Array<Mushroom>;
  clean: () => void;
}

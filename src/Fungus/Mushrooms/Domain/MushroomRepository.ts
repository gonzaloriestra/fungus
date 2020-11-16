import { Mushroom } from './Mushroom';
import { MushroomId } from '../../Shared/Domain/MushroomId';

export interface MushroomRepository {
  add: (mushroom: Mushroom) => void;
  // To-Do implement the criteria pattern
  findById: (id: MushroomId) => Mushroom | undefined;
  filterBy: ({ scientificName }: { scientificName?: string }) => Array<Mushroom>;
  searchAll: () => Array<Mushroom>;
  clean: () => void;
}

import { Location } from '../../Locations/Domain/Location';

import { Harvest } from './Harvest';
import { HarvestId } from './HarvestId';

export interface HarvestRepository {
  add: (harvest: Harvest) => void;
  count: () => number;
  // To-Do consider implement criteria pattern
  filterBy: ({ date, location }: { date?: Date; location?: Location }) => Array<Harvest>;
  findById: (id: HarvestId) => Harvest | undefined;
  all: () => Harvest[];
  clean: () => void;
}

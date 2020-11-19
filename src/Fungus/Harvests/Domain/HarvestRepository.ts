import { LocationId } from '../../Shared/Domain/LocationId';

import { Harvest } from './Harvest';
import { HarvestId } from './HarvestId';

export interface HarvestRepository {
  add: (harvest: Harvest) => void;
  count: () => number;
  filterBy: ({ date, locationId }: { date?: Date; locationId?: LocationId }) => Array<Harvest>;
  findById: (id: HarvestId) => Harvest | undefined;
  all: () => Array<Harvest>;
  clean: () => void;
}

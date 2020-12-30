import { Harvest } from '../../Harvests/Domain/Harvest';
import { HarvestRepository } from '../../Harvests/Domain/HarvestRepository';

import { LocationId } from '../../Shared/Domain/LocationId';

import { HarvestQuery } from '../Application/Generate/HarvestQuery';
import { HarvestView } from '../Application/Generate/HarvestView';
import { HarvestsView } from '../Application/Generate/HarvestsView';

export class RepositoryHarvestQuery implements HarvestQuery {
  repository: HarvestRepository;

  constructor(repository: HarvestRepository) {
    this.repository = repository;
  }

  filterBy({ locationId }: { locationId?: string }): HarvestsView {
    if (locationId) {
      const harvests = this.repository.filterBy({ locationId: new LocationId(locationId) });

      return new HarvestsView({
        harvests: harvests?.toArray().map((harvest: Harvest) => new HarvestView(harvest.toPrimitives())),
        median: harvests?.median(),
      });
    }

    return new HarvestsView();
  }
}

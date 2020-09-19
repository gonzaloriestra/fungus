import { HarvestRepository } from '../../Domain/HarvestRepository';

import { HarvestsByLocationFinderResponse } from './HarvestsByLocationFinderResponse';
import { LocationId } from '../../../Locations/Domain/LocationId';
import { Location } from '../../../Locations/Domain/Location';

export default class HarvestsByLocationFinder {
  repository: HarvestRepository;

  constructor(repository: HarvestRepository) {
    this.repository = repository;
  }

  invoke(locationId: LocationId): HarvestsByLocationFinderResponse {
    return new HarvestsByLocationFinderResponse(
      this.repository.filterBy({ location: new Location({ id: locationId }) }),
    );
  }
}

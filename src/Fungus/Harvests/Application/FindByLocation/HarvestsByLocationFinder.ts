import { Location } from '../../../Locations/Domain/Location';
import { HarvestRepository } from '../../Domain/HarvestRepository';

import { FindHarvestsByLocationResponse } from './FindHarvestsByLocationResponse';
import { FindHarvestsByLocationRequest } from './FindHarvestsByLocationRequest';

export default class HarvestsByLocationFinder {
  repository: HarvestRepository;

  constructor(repository: HarvestRepository) {
    this.repository = repository;
  }

  invoke({ locationId }: FindHarvestsByLocationRequest): FindHarvestsByLocationResponse {
    return new FindHarvestsByLocationResponse(this.repository.filterBy({ location: new Location({ id: locationId }) }));
  }
}

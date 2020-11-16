import { HarvestRepository } from '../../Domain/HarvestRepository';

import { Location } from '../../../Locations/Domain/Location';
import { Area } from '../../../Locations/Domain/Area';

import { FindHarvestsByLocationResponse } from './FindHarvestsByLocationResponse';
import { FindHarvestsByLocationRequest } from './FindHarvestsByLocationRequest';

export default class HarvestsByLocationFinder {
  repository: HarvestRepository;

  constructor(repository: HarvestRepository) {
    this.repository = repository;
  }

  invoke({ locationId }: FindHarvestsByLocationRequest): FindHarvestsByLocationResponse {
    // To-Do Make search(criteria) instead of filterBy and avoid creating Location object when you only need the id
    return new FindHarvestsByLocationResponse(
      this.repository.filterBy({
        location: new Location({ id: locationId, name: '', area: new Area({ coordinates: [] }) }),
      }),
    );
  }
}

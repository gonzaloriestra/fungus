import { HarvestRepository } from '../../../Harvests/Domain/HarvestRepository';

import Date from '../../../Shared/Domain/Date';
import { LocationQuery } from '../../../Shared/Application/Locations/LocationQuery';
import { LocationId } from '../../../Shared/Domain/LocationId';

import { GenerateForecastsResponse } from './GenerateForecastsResponse';
import { GenerateForecastsRequest } from './GenerateForecastsRequest';
import { Harvests } from '../../../Harvests/Domain/Harvests';

import { Forecast } from '../../Domain/Forecast';

export default class ForecastsGenerator {
  private locationQuery: LocationQuery;
  // To-Do Make the same for harvests
  private harvestRepository: HarvestRepository;

  constructor(locationQuery: LocationQuery, harvestRepository: HarvestRepository) {
    this.locationQuery = locationQuery;
    this.harvestRepository = harvestRepository;
  }

  run({ date }: GenerateForecastsRequest): object {
    const locations = this.locationQuery.all();

    const forecasts = locations.map((location) => {
      const harvests = this.harvestRepository.filterBy({ locationId: new LocationId(location.id()) });

      return new Forecast({
        locationId: new LocationId(location.id()),
        // To-Do pipeline pattenr to apply probability different specifications
        probability: this.calculateProbabilityBasedOnHarvests({ date, harvests }),
      });
    });

    // Maybe time for an application service where the probability is calculate based on location and harvest's locations

    return new GenerateForecastsResponse({ date, forecasts });
  }

  private calculateProbabilityBasedOnHarvests({ date, harvests }: { date: Date; harvests: Harvests }): number {
    const median = harvests.median();
    const deviation = 5;

    return Math.round(100 * Math.exp(-((date.dayOfYear() - median) / (2 * deviation))));
  }
}

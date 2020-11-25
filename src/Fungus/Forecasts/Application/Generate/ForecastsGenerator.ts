import { LocationRepository } from '../../../Locations/Domain/LocationRepository';
import { HarvestRepository } from '../../../Harvests/Domain/HarvestRepository';

import Date from '../../../Shared/Domain/Date';
import { Forecast } from '../../Domain/Forecast';

import { GenerateForecastsResponse } from './GenerateForecastsResponse';
import { GenerateForecastsRequest } from './GenerateForecastsRequest';
import { Harvests } from '../../../Harvests/Domain/Harvests';

export default class ForecastsGenerator {
  private locationRepository: LocationRepository;
  // It could be a provider <---- LocationQuery  -  RepositoryLocationQuery
  // CQRS with queries
  // In the same module
  private harvestRepository: HarvestRepository;

  constructor(locationRepository: LocationRepository, harvestRepository: HarvestRepository) {
    this.locationRepository = locationRepository;
    this.harvestRepository = harvestRepository;
  }

  run({ date }: GenerateForecastsRequest): object {
    const locations = this.locationRepository.all();

    const forecasts = locations.map((location) => {
      const harvests = this.harvestRepository.filterBy({ locationId: location.id() });

      return new Forecast({
        locationId: location.id(),
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

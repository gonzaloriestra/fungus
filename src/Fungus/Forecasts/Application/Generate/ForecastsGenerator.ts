import Date from '../../../Shared/Domain/Date';
import { LocationQuery } from '../../../Shared/Application/Locations/LocationQuery';
import { LocationId } from '../../../Shared/Domain/LocationId';
import { HarvestQuery } from '../../../Shared/Application/Harvests/HarvestQuery';
import { HarvestsView } from '../../../Shared/Application/Harvests/HarvestsView';

import { GenerateForecastsResponse } from './GenerateForecastsResponse';
import { GenerateForecastsRequest } from './GenerateForecastsRequest';

import { Forecast } from '../../Domain/Forecast';

export default class ForecastsGenerator {
  private locationQuery: LocationQuery;
  // To-Do Make the same for harvests
  private harvestQuery: HarvestQuery;

  constructor(locationQuery: LocationQuery, harvestQuery: HarvestQuery) {
    this.locationQuery = locationQuery;
    this.harvestQuery = harvestQuery;
  }

  // To-Do add some test here, it does not work properly: 2020-11-10 and 2020-12-10 and day for forecast 2020-11-10
  run({ date }: GenerateForecastsRequest): GenerateForecastsResponse {
    const locations = this.locationQuery.all();

    const forecasts = locations.map((location) => {
      const harvests = this.harvestQuery.filterBy({ locationId: location.id() });

      return new Forecast({
        locationId: new LocationId(location.id()),
        // To-Do pipeline pattenr to apply probability different specifications
        probability: this.calculateProbabilityBasedOnHarvests({ date, harvests }),
      });
    });

    // Maybe time for an application service where the probability is calculate based on location and harvest's locations

    return new GenerateForecastsResponse({ date, forecasts });
  }

  private calculateProbabilityBasedOnHarvests({ date, harvests }: { date: Date; harvests: HarvestsView }): number {
    const median = harvests.median();
    const deviation = 5;

    if (!median) {
      return 0;
    }

    return Math.round(100 * Math.exp(-(Math.pow(date.dayOfYear() - median, 2) / (2 * deviation))) * 100);
  }
}

import Date from '../../../Shared/Domain/Date';
import { LocationQuery } from './LocationQuery';
import { LocationId } from '../../../Shared/Domain/Locations/LocationId';
import { HarvestQuery } from './HarvestQuery';
import { HarvestsView } from './HarvestsView';

import { GenerateForecastsResponse } from './GenerateForecastsResponse';
import { GenerateForecastsRequest } from './GenerateForecastsRequest';

import { Forecast } from '../../Domain/Forecast';
import { LocationView } from './LocationView';

export default class ForecastsGenerator {
  private locationQuery: LocationQuery;
  private harvestQuery: HarvestQuery;

  constructor(locationQuery: LocationQuery, harvestQuery: HarvestQuery) {
    this.locationQuery = locationQuery;
    this.harvestQuery = harvestQuery;
  }

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

  private calculateProbabilityBasedOnPrecipitation({ date, location }: { date: Date; location: LocationView }): number {
    // To-Do
    // get station associated to the location
    // const weatherStation = this.weatherStationRepository.findById(location.weatherStationId());
    // const precipitation = weatherStation.earlyPeriodPrecipitation(date);
    // rain before 10 days mora than 40 l
    // return precipitation >= 40 ? 1 : 0;
    return 0;
  }

  private calculateProbabilityBasedOnHarvests({ date, harvests }: { date: Date; harvests: HarvestsView }): number {
    const median = harvests.median();
    // To-Do get the desviation for the mushrooms type
    const deviation = 5;

    if (!median) {
      return 0;
    }

    return Math.round(100 * Math.exp(-(Math.pow(date.dayOfYear() - median, 2) / (2 * deviation))) * 100);
  }
}

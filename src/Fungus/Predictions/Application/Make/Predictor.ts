import { WeatherStationRepository } from '../../Domain/WeatherStations/WeatherStationRepository';

import { LocationRepository } from '../../../Locations/Domain/LocationRepository';

import { MakePredictionRequest } from './MakePredictionRequest';
import { MakePredictionResponse } from './MakePredictionResponse';
import { ConditionRepository } from '../../Domain/ConditionRepository';
import { LocationQuery } from '../../Domain/LocationQuery';
import { HarvestQuery } from '../../Domain/HarvestQuery';
import { LocationId } from '../../../Shared/Domain/LocationId';
import Date from '../../../Shared/Domain/Date';
import { HarvestsView } from '../../Domain/HarvestsView';

export default class Predictor {
  private readonly _locationRepository: LocationRepository;
  private readonly _conditionRepository: ConditionRepository;
  private readonly _weatherStationRepository: WeatherStationRepository;
  // private locationQuery: LocationQuery;
  // private harvestQuery: HarvestQuery;

  // constructor(locationQuery: LocationQuery, harvestQuery: HarvestQuery) {
  //   this.locationQuery = locationQuery;
  //   this.harvestQuery = harvestQuery;
  // }

  constructor(
    locationRepository: LocationRepository,
    weatherStationRepository: WeatherStationRepository,
    conditionRepository: ConditionRepository,
  ) {
    this._locationRepository = locationRepository;
    this._weatherStationRepository = weatherStationRepository;
    this._conditionRepository = conditionRepository;
  }

  async run({ date, mushroomId, locationId }: MakePredictionRequest): Promise<MakePredictionResponse> {
    // const locations = this.locationQuery.all();
    //
    // const forecasts = locations.map((location) => {
    //   const harvests = this.harvestQuery.filterBy({ locationId: location.id() });
    //
    //   return new Forecast({
    //     locationId: new LocationId(location.id()),
    //     // To-Do pipeline pattenr to apply probability different specifications
    //     probability: this.calculateProbabilityBasedOnHarvests({ date, harvests }),
    //   });
    // });
    //
    // // Maybe time for an application service where the probability is calculate based on location and harvest's locations
    //
    // return new GenerateForecastsResponse({ date, forecasts });

    // To-Do it could be a query if we extract from location
    const location = this._locationRepository.findById(locationId);
    const weatherStationId = location?.weatherStationId();

    let weatherStation;
    if (weatherStationId) {
      weatherStation = this._weatherStationRepository.findById(weatherStationId);
    }

    const conditions = this._conditionRepository.findByMushroom(mushroomId);
    // To-Do translate this if to guard clauses
    if (!conditions || !weatherStation) {
      // To-Do throw an exception
      return new MakePredictionResponse({ probability: 0 });
    }

    const conditionsPercentMet = await conditions.areMet({ date, weatherStation });

    return new MakePredictionResponse({ probability: conditionsPercentMet });
  }

  // private calculateProbabilityBasedOnHarvests({ date, harvests }: { date: Date; harvests: HarvestsView }): number {
  //   const median = harvests.median();
  //   // To-Do get the desviation for the mushrooms type
  //   const deviation = 5;
  //
  //   if (!median) {
  //     return 0;
  //   }
  //
  //   return Math.round(100 * Math.exp(-(Math.pow(date.dayOfYear() - median, 2) / (2 * deviation))) * 100);
  // }
}

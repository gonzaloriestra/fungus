import { WeatherStationRepository } from '../../Domain/WeatherStations/WeatherStationRepository';
import { ConditionRepository } from '../../Domain/ConditionRepository';
import { LocationQuery } from '../../Domain/LocationQuery';

import { MakePredictionResponse } from './MakePredictionResponse';
import { MakePredictionRequest } from './MakePredictionRequest';

export default class Predictor {
  private readonly _conditionRepository: ConditionRepository;
  private readonly _weatherStationRepository: WeatherStationRepository;
  private readonly _locationQuery: LocationQuery;

  constructor(
    locationQuery: LocationQuery,
    weatherStationRepository: WeatherStationRepository,
    conditionRepository: ConditionRepository,
  ) {
    this._locationQuery = locationQuery;
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

    const location = this._locationQuery.findById(locationId);
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

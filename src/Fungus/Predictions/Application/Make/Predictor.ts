import { WeatherStationRepository } from '../../Domain/WeatherStations/WeatherStationRepository';

import { LocationRepository } from '../../../Locations/Domain/LocationRepository';

import { MakePredictionRequest } from './MakePredictionRequest';
import { MakePredictionResponse } from './MakePredictionResponse';
import { ConditionRepository } from '../../Domain/ConditionRepository';

export default class Predictor {
  private readonly _locationRepository: LocationRepository;
  private readonly _conditionRepository: ConditionRepository;
  private readonly _weatherStationRepository: WeatherStationRepository;

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
}

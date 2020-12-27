import { WeatherConditionRepository } from '../../Domain/WeatherConditionRepository';
import { WeatherStationRepository } from '../../Domain/WeatherStationRepository';

import { MakePredictionResponse } from './MakePredictionResponse';
import { MakePredictionRequest } from './MakePredictionRequest';
import { LocationRepository } from '../../Domain/LocationRepository';

export default class Predictor {
  private readonly locationRepository: LocationRepository;
  private readonly weatherConditionRepository: WeatherConditionRepository;
  private readonly weatherStationRepository: WeatherStationRepository;

  constructor(
    locationRepository: LocationRepository,
    weatherStationRepository: WeatherStationRepository,
    weatherConditionRepository: WeatherConditionRepository,
  ) {
    this.locationRepository = locationRepository;
    this.weatherStationRepository = weatherStationRepository;
    this.weatherConditionRepository = weatherConditionRepository;
  }

  run({ date, mushroomId, locationId }: MakePredictionRequest): MakePredictionResponse {
    // To-Do it could be a query if we extract from location
    const location = this.locationRepository.findById(locationId);
    const weatherStationId = location?.weatherStationId();

    const weatherConditions = this.weatherConditionRepository.findByMushroom(mushroomId);
    let weatherStation;
    if (weatherStationId) {
      weatherStation = this.weatherStationRepository.findById(weatherStationId);
    }
    // To-Do translate this if to guard clauses
    if (!weatherConditions || !weatherStation) {
      return new MakePredictionResponse({ probability: 0 });
    }

    const weatherConditionsPercentMet = weatherConditions.areMet({ date, weatherStation });

    return new MakePredictionResponse({ probability: weatherConditionsPercentMet });
  }
}

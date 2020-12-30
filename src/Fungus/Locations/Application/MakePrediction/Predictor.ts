import { WeatherConditionRepository } from '../../Domain/WeatherConditions/WeatherConditionRepository';
import { WeatherStationRepository } from '../../Domain/WeatherStations/WeatherStationRepository';

import { LocationRepository } from '../../Domain/LocationRepository';
import { WeatherService } from '../../Domain/WeatherStations/WeatherService';

import { MakePredictionRequest } from './MakePredictionRequest';
import { MakePredictionResponse } from './MakePredictionResponse';

export default class Predictor {
  private readonly _locationRepository: LocationRepository;
  private readonly _weatherConditionRepository: WeatherConditionRepository;
  private readonly _weatherStationRepository: WeatherStationRepository;
  private readonly _weatherService: WeatherService;

  constructor(
    locationRepository: LocationRepository,
    weatherStationRepository: WeatherStationRepository,
    weatherConditionRepository: WeatherConditionRepository,
    weatherService: WeatherService,
  ) {
    this._locationRepository = locationRepository;
    this._weatherStationRepository = weatherStationRepository;
    this._weatherConditionRepository = weatherConditionRepository;
    this._weatherService = weatherService;
  }

  async run({ date, mushroomId, locationId }: MakePredictionRequest): Promise<MakePredictionResponse> {
    // To-Do it could be a query if we extract from location
    const location = this._locationRepository.findById(locationId);
    const weatherStationId = location?.weatherStationId();

    const weatherConditions = this._weatherConditionRepository.findByMushroom(mushroomId);
    let weatherStation;
    if (weatherStationId) {
      weatherStation = this._weatherStationRepository.findById(weatherStationId);
    }
    // To-Do translate this if to guard clauses
    if (!weatherConditions || !weatherStation) {
      return new MakePredictionResponse({ probability: 0 });
    }

    const weatherConditionsPercentMet = await weatherConditions.areMet({
      date,
      weatherStation,
      weatherService: this._weatherService,
    });

    return new MakePredictionResponse({ probability: weatherConditionsPercentMet });
  }
}

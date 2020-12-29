import { WeatherConditionRepository } from '../../Domain/WeatherConditions/WeatherConditionRepository';
import { WeatherStationRepository } from '../../Domain/WeatherStations/WeatherStationRepository';

import { LocationRepository } from '../../Domain/LocationRepository';
import { WeatherService } from '../../Domain/WeatherStations/WeatherService';

import { MakePredictionRequest } from './MakePredictionRequest';
import { MakePredictionResponse } from './MakePredictionResponse';

export default class Predictor {
  private readonly locationRepository: LocationRepository;
  private readonly weatherConditionRepository: WeatherConditionRepository;
  private readonly weatherStationRepository: WeatherStationRepository;
  private readonly weatherService: WeatherService;

  constructor(
    locationRepository: LocationRepository,
    weatherStationRepository: WeatherStationRepository,
    weatherConditionRepository: WeatherConditionRepository,
    weatherService: WeatherService,
  ) {
    this.locationRepository = locationRepository;
    this.weatherStationRepository = weatherStationRepository;
    this.weatherConditionRepository = weatherConditionRepository;
    this.weatherService = weatherService;
  }

  async run({ date, mushroomId, locationId }: MakePredictionRequest): Promise<MakePredictionResponse> {
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

    const weatherConditionsPercentMet = await weatherConditions.areMet({
      date,
      weatherStation,
      weatherService: this.weatherService,
    });

    return new MakePredictionResponse({ probability: weatherConditionsPercentMet });
  }
}

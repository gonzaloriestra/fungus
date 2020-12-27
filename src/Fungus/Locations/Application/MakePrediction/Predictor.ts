import { WeatherConditionRepository } from '../../Domain/WeatherConditionRepository';
import { WeatherStationRepository } from '../../Domain/WeatherStationRepository';

import { MakePredictionResponse } from './MakePredictionResponse';
import { MakePredictionRequest } from './MakePredictionRequest';

export default class Predictor {
  private readonly weatherConditionRepository: WeatherConditionRepository;
  private readonly weatherStationRepository: WeatherStationRepository;

  constructor(
    weatherStationRepository: WeatherStationRepository,
    weatherConditionRepository: WeatherConditionRepository,
  ) {
    this.weatherStationRepository = weatherStationRepository;
    this.weatherConditionRepository = weatherConditionRepository;
  }

  run({ date, mushroomId, locationId }: MakePredictionRequest): MakePredictionResponse {
    const weatherStation = this.weatherStationRepository.findByLocation(locationId);
    const weatherConditions = this.weatherConditionRepository.findByMushroom(mushroomId);

    if (!weatherConditions || !weatherStation) {
      return new MakePredictionResponse({ probability: 0 });
    }

    const weatherContionsPercentMet = weatherConditions.areMet({ date, weatherStation });

    return new MakePredictionResponse({ probability: weatherContionsPercentMet });
  }
}

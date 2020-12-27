import { MushroomQuery } from '../../../Shared/Application/Mushrooms/MushroomQuery';

import { LocationRepository } from '../../Domain/LocationRepository';

import { MakePredictionResponse } from './MakePredictionResponse';
import { MakePredictionRequest } from './MakePredictionRequest';

export default class Predictor {
  private locationRepository: LocationRepository;
  private mushroomQuery: MushroomQuery;

  constructor(mushroomQuery: MushroomQuery, locationRepository: LocationRepository) {
    this.locationRepository = locationRepository;
    this.mushroomQuery = mushroomQuery;
  }

  run({ date, mushroomId, locationId }: MakePredictionRequest): MakePredictionResponse {
    const mushroom = this.mushroomQuery.findById(mushroomId);
    // To-do get the list of weather conditions associated

    const location = this.locationRepository.findById(locationId);
    // const weatherContionsPercentMet = location.meetWeatherConditions({ weatherConditions, date });
    const weatherContionsPercentMet = 10000;
    // To-do const result = location.satisfies({ weatherCondition, date });
    // new
    return new MakePredictionResponse({ probability: weatherContionsPercentMet });
  }
}

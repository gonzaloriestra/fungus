import { MushroomId } from '../../../Shared/Domain/Mushrooms/MushroomId';

import { AccumulatedPrecipitation } from '../../Domain/WeatherConditions/AccumulatedPrecipitation';

export const weatherConditions = [
  // Boletus edulis
  new AccumulatedPrecipitation({
    mushroomId: new MushroomId('de66c4dc-59c6-48d9-99a3-8d729f2154e7'),
    daysBefore: 12,
    accumulation: 35,
    daysRange: 5,
  }),
  // Amanita caesarea
  new AccumulatedPrecipitation({
    mushroomId: new MushroomId('1f0add1e-6e56-4920-85e9-061f9a64f720'),
    daysBefore: 15,
    accumulation: 60,
    daysRange: 5,
  }),
];

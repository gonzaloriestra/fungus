import { MushroomId } from '../../Shared/Domain/MushroomId';

import { AccumulatedPrecipitation } from '../Domain/WeatherConditions/AccumulatedPrecipitation';
import { SeasonCondition } from '../Domain/SeasonCondition';
import { Season } from '../Domain/Season';

export const conditions = [
  // Boletus edulis
  new AccumulatedPrecipitation({
    mushroomId: new MushroomId('de66c4dc-59c6-48d9-99a3-8d729f2154e7'),
    daysBefore: 12,
    accumulation: 35,
    daysRange: 5,
  }),
  new SeasonCondition({
    mushroomId: new MushroomId('de66c4dc-59c6-48d9-99a3-8d729f2154e7'),
    season: Season.autumn(),
  }),

  // Amanita caesarea
  new AccumulatedPrecipitation({
    mushroomId: new MushroomId('1f0add1e-6e56-4920-85e9-061f9a64f720'),
    daysBefore: 15,
    accumulation: 60,
    daysRange: 5,
  }),
  new SeasonCondition({
    mushroomId: new MushroomId('1f0add1e-6e56-4920-85e9-061f9a64f720'),
    season: Season.lateSummerEarlyAutumn(),
  }),

  // Hygrophorus marzuolus
  new AccumulatedPrecipitation({
    mushroomId: new MushroomId('c0770a11-0e68-4d23-b8fc-6c6e5b4ce2d1'),
    daysBefore: 10,
    accumulation: 60,
    daysRange: 15,
  }),
  new SeasonCondition({
    mushroomId: new MushroomId('c0770a11-0e68-4d23-b8fc-6c6e5b4ce2d1'),
    season: Season.lateWinterEarlySpring(),
  }),
];

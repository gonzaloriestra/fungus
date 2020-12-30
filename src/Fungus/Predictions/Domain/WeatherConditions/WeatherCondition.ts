import Date from '../../../Shared/Domain/Date';
import { MushroomId } from '../../../Shared/Domain/MushroomId';

import { WeatherStation } from '../WeatherStations/WeatherStation';
import { WeatherService } from '../WeatherStations/WeatherService';

export interface WeatherCondition {
  isMet({
    date,
    weatherStation,
    weatherService,
  }: {
    date: Date;
    weatherStation: WeatherStation;
    weatherService: WeatherService;
  }): Promise<number>;
  mushroomId(): MushroomId;
}

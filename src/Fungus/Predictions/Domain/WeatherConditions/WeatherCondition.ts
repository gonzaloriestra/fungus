import Date from '../../../Shared/Domain/Date';
import { MushroomId } from '../../../Shared/Domain/MushroomId';

import { WeatherStation } from '../WeatherStations/WeatherStation';

export interface WeatherCondition {
  isMet({ date, weatherStation }: { date: Date; weatherStation: WeatherStation }): Promise<number>;
  mushroomId(): MushroomId;
}

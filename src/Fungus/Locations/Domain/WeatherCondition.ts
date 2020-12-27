import Date from '../../Shared/Domain/Date';
import { WeatherStation } from './WeatherStation';
import { MushroomId } from '../../Shared/Domain/Mushrooms/MushroomId';

// To-Do rename to MicoWeatherCondition
export interface WeatherCondition {
  isMet({ date, weatherStation }: { date: Date; weatherStation: WeatherStation }): number;
  mushroomId(): MushroomId;
}

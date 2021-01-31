import { WeatherStation } from '../WeatherStations/WeatherStation';
import { Condition } from '../Condition';

export interface WeatherCondition extends Condition {
  assignWeatherStation({ weatherStation }: { weatherStation: WeatherStation }): void;
}

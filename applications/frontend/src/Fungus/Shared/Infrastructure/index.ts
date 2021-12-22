import { WeatherStationRepository } from '../../Predictions/Domain/WeatherStations/WeatherStationRepository';
import { InMemoryAEMETWeatherStationRepository } from '../../Predictions/Infrastructure/WeatherStations/InMemoryAEMETWeatherStationRepository';

const weatherStationRepository: WeatherStationRepository = new InMemoryAEMETWeatherStationRepository();

export { weatherStationRepository };

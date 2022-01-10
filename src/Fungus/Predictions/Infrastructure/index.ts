// ToDo: Comes from another module
import { locationRepository } from '../../Locations/Infrastructure';
import { WeatherStationRepository } from '../Domain/WeatherStations/WeatherStationRepository';
import { InMemoryAEMETWeatherStationRepository } from './WeatherStations/InMemoryAEMETWeatherStationRepository';
import { ConditionRepository } from '../Domain/ConditionRepository';
import { LocationQuery } from '../Domain/LocationQuery';

import { InMemoryConditionRepository } from './InMemoryConditionRepository';
import { RepositoryLocationQuery } from './RepositoryLocationQuery';

const weatherStationRepository: WeatherStationRepository = new InMemoryAEMETWeatherStationRepository();
const conditionRepository: ConditionRepository = new InMemoryConditionRepository();
const locationQuery: LocationQuery = new RepositoryLocationQuery(locationRepository);

export { weatherStationRepository, conditionRepository, locationQuery };

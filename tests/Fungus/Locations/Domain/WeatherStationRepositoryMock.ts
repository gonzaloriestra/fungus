import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';

import { WeatherStationRepository } from '../../../../src/Fungus/Locations/Domain/WeatherStationRepository';
import { WeatherStation } from '../../../../src/Fungus/Locations/Domain/WeatherStation';

export default class WeatherStationRepositoryMock implements WeatherStationRepository {
  private mockFindByLocation = jest.fn();
  private weatherStation?: WeatherStation = undefined;

  findByLocation(_: LocationId): WeatherStation | undefined {
    this.mockFindByLocation();
    return this.weatherStation;
  }

  returnOnFindByLocation(weatherStation: WeatherStation): void {
    this.weatherStation = weatherStation;
  }

  assertFindByLocationHasBeenCalled(): void {
    expect(this.mockFindByLocation).toHaveBeenCalled();
  }
}

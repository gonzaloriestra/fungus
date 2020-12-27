import { MethodNotImplemented } from '../../../../src/Fungus/Shared/Domain/MethodNotImplemented';

import { WeatherStationRepository } from '../../../../src/Fungus/Locations/Domain/WeatherStationRepository';
import { WeatherStation } from '../../../../src/Fungus/Locations/Domain/WeatherStation';
import { Coordinate } from '../../../../src/Fungus/Locations/Domain/Coordinate';
import { WeatherStationId } from '../../../../src/Fungus/Locations/Domain/WeatherStationId';

export default class WeatherStationRepositoryMock implements WeatherStationRepository {
  private mockFindBy = jest.fn();
  private weatherStation?: WeatherStation = undefined;

  findByProximity(_: Coordinate): WeatherStation | undefined {
    this.mockFindBy();
    return this.weatherStation;
  }

  findById(_: WeatherStationId): WeatherStation | undefined {
    this.mockFindBy();
    return this.weatherStation;
  }

  returnOnFindBy(weatherStation: WeatherStation): void {
    this.weatherStation = weatherStation;
  }

  assertFindByHasBeenCalled(): void {
    expect(this.mockFindBy).toHaveBeenCalled();
  }
}

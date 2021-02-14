import { Coordinate } from '../../../../src/Fungus/Shared/Domain/Coordinate';
import { WeatherStationId } from '../../../../src/Fungus/Shared/Domain/WeatherStationId';

import { WeatherStationRepository } from '../../../../src/Fungus/Predictions/Domain/WeatherStations/WeatherStationRepository';
import { WeatherStation } from '../../../../src/Fungus/Predictions/Domain/WeatherStations/WeatherStation';

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

  returnOnFindById(weatherStation: WeatherStation): void {
    this.weatherStation = weatherStation;
  }

  assertFindByIdHasBeenCalled(): void {
    expect(this.mockFindBy).toHaveBeenCalled();
  }
}

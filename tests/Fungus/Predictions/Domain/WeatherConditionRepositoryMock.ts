import { MushroomId } from '../../../../src/Fungus/Shared/Domain/MushroomId';

import { WeatherConditionRepository } from '../../../../src/Fungus/Predictions/Domain/WeatherConditions/WeatherConditionRepository';
import { WeatherConditions } from '../../../../src/Fungus/Predictions/Domain/WeatherConditions/WeatherConditions';

export default class WeatherConditionRepositoryMock implements WeatherConditionRepository {
  private mockFindByMushroom = jest.fn();
  private weatherConditions: WeatherConditions = new WeatherConditions();

  findByMushroom(_: MushroomId): WeatherConditions {
    this.mockFindByMushroom();
    return this.weatherConditions;
  }

  returnOnFindByMushroom(weatherConditions: WeatherConditions) {
    this.weatherConditions = weatherConditions;
  }

  assertFindByMushroomHasBeenCalled() {
    expect(this.mockFindByMushroom).toHaveBeenCalled();
  }
}

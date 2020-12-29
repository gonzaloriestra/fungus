import { MushroomId } from '../../../../src/Fungus/Shared/Domain/Mushrooms/MushroomId';

import { WeatherConditionRepository } from '../../../../src/Fungus/Locations/Domain/WeatherConditions/WeatherConditionRepository';
import { WeatherConditions } from '../../../../src/Fungus/Locations/Domain/WeatherConditions/WeatherConditions';

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

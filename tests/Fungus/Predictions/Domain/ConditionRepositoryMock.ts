import { MushroomId } from '../../../../src/Fungus/Shared/Domain/MushroomId';

import { ConditionRepository } from '../../../../src/Fungus/Predictions/Domain/ConditionRepository';
import { Conditions } from '../../../../src/Fungus/Predictions/Domain/Conditions';

export default class ConditionRepositoryMock implements ConditionRepository {
  private mockFindByMushroom = jest.fn();
  private conditions: Conditions = new Conditions();

  findByMushroom(_: MushroomId): Conditions {
    this.mockFindByMushroom();
    return this.conditions;
  }

  returnOnFindByMushroom(conditions: Conditions) {
    this.conditions = conditions;
  }

  assertFindByMushroomHasBeenCalled() {
    expect(this.mockFindByMushroom).toHaveBeenCalled();
  }
}

import { MushroomId } from '../../Shared/Domain/MushroomId';

import { ConditionRepository } from '../Domain/ConditionRepository';
import { Conditions } from '../Domain/Conditions';

import { conditions } from './conditions';

const initialConditions = new Conditions({ conditions });

export class InMemoryConditionRepository implements ConditionRepository {
  private readonly _conditions: Conditions;

  constructor({ conditions = initialConditions }: { conditions?: Conditions } = {}) {
    this._conditions = conditions || new Conditions();
  }

  findByMushroom(mushroomId: MushroomId): Conditions {
    return this._conditions.findByMushroom(mushroomId);
  }
}

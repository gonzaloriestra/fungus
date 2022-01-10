import { MushroomId } from '../../Shared/Domain/MushroomId';

import { Conditions } from './Conditions';

export interface ConditionRepository {
  findByMushroom: (id: MushroomId) => Conditions;
}

import faker from 'faker';

import { HarvestsView } from '../../../../src/Fungus/Predictions/Domain/HarvestsView';
import { HarvestView } from '../../../../src/Fungus/Predictions/Domain/HarvestView';

import HarvestViewMother from './HarvestViewMother';

export default class HarvestsViewMother {
  static create({
    harvests = Array(faker.random.number(10)).map(() => HarvestViewMother.random()),
    median = faker.random.number(366),
  }: {
    harvests?: Array<HarvestView>;
    median?: number;
  } = {}): HarvestsView {
    return new HarvestsView({ harvests, median });
  }

  static random(): HarvestsView {
    return this.create();
  }
}

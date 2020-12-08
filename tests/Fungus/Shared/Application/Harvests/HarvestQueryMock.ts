import { HarvestQuery } from '../../../../../src/Fungus/Shared/Application/Harvests/HarvestQuery';
import { HarvestsView } from '../../../../../src/Fungus/Shared/Application/Harvests/HarvestsView';

export default class HarvestQueryMock implements HarvestQuery {
  private mockFilterBy = jest.fn();
  private harvests: HarvestsView = new HarvestsView();

  filterBy(): HarvestsView {
    this.mockFilterBy();
    return this.harvests;
  }

  returnOnFilterBy(harvests: HarvestsView) {
    this.harvests = harvests;
  }

  assertFilterByHasBeenCalled() {
    expect(this.mockFilterBy).toHaveBeenCalled();
  }
}

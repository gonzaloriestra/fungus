import { HarvestQuery } from '../../../../src/Fungus/Predictions/Domain/HarvestQuery';
import { HarvestsView } from '../../../../src/Fungus/Predictions/Domain/HarvestsView';

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

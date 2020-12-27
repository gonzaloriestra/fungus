import { HarvestQuery } from '../../../../src/Fungus/Forecasts/Application/Generate/HarvestQuery';
import { HarvestsView } from '../../../../src/Fungus/Forecasts/Application/Generate/HarvestsView';

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

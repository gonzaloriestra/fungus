import { HarvestView } from './HarvestView';

export class HarvestsView {
  private readonly _harvests: Array<HarvestView>;
  private readonly _median: number | undefined;

  constructor({ harvests, median }: { harvests?: Array<HarvestView>; median?: number } = {}) {
    this._harvests = harvests || [];
    this._median = median;
  }

  harvests(): Array<HarvestView> {
    return this._harvests;
  }

  median(): number | undefined {
    return this._median;
  }
}

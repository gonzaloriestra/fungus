import { Map } from './Map';
import { Micoparam } from './Micoparams/Domain/Micoparam';
import { Harvest } from './Harvests/Domain/Harvest';
import { Forecast } from './Forecasts/Domain/Forecast';
import { HarvestRepository } from './Harvests/Domain/HarvestRepository';
import { FileHarvestRepository } from './Harvests/Infrastructure/FileHarvestRepository';

type FungusProps = { map?: Map; micoParameters?: Array<Micoparam>; harvestHistory?: HarvestRepository };

export class Fungus {
  map: Map;
  harvestHistory: HarvestRepository;

  constructor({ map = new Map(), harvestHistory = new FileHarvestRepository() }: FungusProps = {}) {
    this.map = map;
    this.harvestHistory = harvestHistory;

    this.harvestHistory.fetch();
  }

  foretell(date: Date): Array<Forecast> {
    const harvestsInTheSameDate = this.harvestHistory.filterBy({ date });

    return harvestsInTheSameDate.map((harvest) => {
      return new Forecast({ location: harvest.location(), mushrooms: [] });
    });
  }

  registerHarvest(harvest: Harvest): void {
    this.harvestHistory.add(harvest);
  }

  harvests(): HarvestRepository {
    return this.harvestHistory;
  }
}

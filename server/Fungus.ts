import { Map } from './valueObjects/Map';
import { MicoParameter } from './valueObjects/MicoParameter';
import { Harvest } from './Domain/Model/Harvest/Harvest';
import { Forecast } from './valueObjects/Forecast';
import { HarvestRepository } from './Domain/Model/Harvest/HarvestRepository';
import { FileHarvestRepository } from './Infrastructure/Domain/Model/Harvest/FileHarvestRepository';

type FungusProps = { map?: Map; micoParameters?: Array<MicoParameter>; harvestHistory?: HarvestRepository };

export class Fungus {
  map: Map;
  harvestHistory: HarvestRepository;

  constructor({ map = new Map(), harvestHistory = new FileHarvestRepository() }: FungusProps = {}) {
    this.map = map;
    this.harvestHistory = harvestHistory;
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

import { Map } from "./valueObjects/Map";
import { MicoParameter } from './valueObjects/MicoParameter';
import { Harvest } from './Domain/Model/Harvest/Harvest';
import { Forecast } from './valueObjects/Forecast';
import { HarvestRepository } from './Domain/Model/Harvest/HarvestRepository';
import { FileHarvestRepository } from './Infrastructure/Domain/Model/Harvest/FileHarvestRepository';

type FungusProps = { map?: Map, micoParameters?: Array<MicoParameter>, harvestHistory?: HarvestRepository };

export class Fungus {
  map: Map;
  harvestHistory: HarvestRepository

  constructor({ map = new Map(), micoParameters = [], harvestHistory = new FileHarvestRepository()}: FungusProps = {}) {
    this.map = map;
    this.harvestHistory = harvestHistory;
  }

  foretell(date: Date): Array<Forecast> {
    // TODO - Harvest and Map are representing the same concept, at the and both are location with some harvest associated
    // Maybe we should include harvests into each location
    // TODO - Date comparation can be wrapper in our custom date object
    const harvestsInTheSameDate = this.harvestHistory.filterBy({date});

    return harvestsInTheSameDate.map((harvest) => {
      return new Forecast({ location: harvest.location(), mushrooms: [] });
    });
  }

  registerHarvest(harvest: Harvest) {
    this.harvestHistory.add(harvest);
  }

  getHarvests(): HarvestRepository {
    return this.harvestHistory;
  }
}

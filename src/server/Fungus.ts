import { Map } from "./valueObjects/Map";
import { MicoParameter } from './valueObjects/MicoParameter';
import { Harvest } from './Domain/Model/Harvest/Harvest';
import { Forecast } from './valueObjects/Forecast';
import { HarvestHistory } from './Domain/Model/Harvest/HarvestHistory';

type FungusProps = { map?: Map, micoParameters?: Array<MicoParameter>, harvestHistory?: HarvestHistory };

export class Fungus {
  map: Map;
  harvestHistory: HarvestHistory

  constructor({ map = new Map(), micoParameters = [], harvestHistory = new HarvestHistory()}: FungusProps = {}) {
    this.map = map;
    this.harvestHistory = harvestHistory;
  }

  foretell(date: Date): Array<Forecast> {
    // TODO - Harvest and Map are representing the same concept, at the and both are location with some harvest associated
    // Maybe we should include harvests into each location
    // TODO - Date comparation can be wrapper in our custom date object
    const harvestsInTheSameDate = this.harvestHistory.filterByDate(date);

    return harvestsInTheSameDate.toArray().map((harvest) => {
      return new Forecast({ location: harvest.location(), mushrooms: [] });
    });
  }

  registerHarvest(harvest: Harvest) {
    this.harvestHistory.add(harvest);
  }

  getHarvests(): HarvestHistory {
    return this.harvestHistory;
  }
}

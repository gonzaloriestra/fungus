import { Map } from "./valueObjects/Map";
import { MicoParameter } from './valueObjects/MicoParameter';
import { Harvest } from './valueObjects/Harvest';
import { Forecast } from './valueObjects/Forecast';

type NieruProps = { map: Map, micoParameters: Array<MicoParameter>, harvestHistory: Array<Harvest> };

export class Nieru {
  map: Map;
  harvestHistory: Array<Harvest>

  constructor({ map, micoParameters, harvestHistory }: NieruProps) {
    this.map = map;
    this.harvestHistory = harvestHistory;
  }

  foretell(date: Date): Array<Forecast> {
    // TODO - Harvest and Map are representing the same concept, at the and both are location with some harvest associated
    // Maybe we should include harvests into each location
    // TODO - Date comparation can be wrapper in our custom date object
    const harvestsInTheSameDate = this.harvestHistory.filter((harvest) => date.getDay() === harvest.getDate().getDay() && date.getMonth() === harvest.getDate().getMonth() && date.getFullYear() === harvest.getDate().getFullYear());

    return harvestsInTheSameDate.map((harvest) => {
      return new Forecast({ location: harvest.getLocation(), mushrooms: [] });
    });
  }
}

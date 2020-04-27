import { Harvest } from "../../Domain/Harvest";
import {HarvestId} from "../../Domain/HarvestId";

type HarvestRegistrationProps = {
  harvestId: string,
  date: string,
  quantity: number,
};

export default class HarvestRegistration {
  invoke({harvestId, date, quantity}: HarvestRegistrationProps) {


    // To-Do check if exists, if exists, throw domain exception of HarvestAlreadyExist({harvestId})

    // To-Do persist in memory
    // const harvest = new Harvest({ id: new HarvestId(harvestId), location: new Location(),  date: new Date(date), quantity});
  }
}

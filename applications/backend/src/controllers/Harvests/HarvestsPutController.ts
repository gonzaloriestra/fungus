import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import httpStatus from 'http-status';

import HarvestCreator from '../../../../../src/Fungus/Harvests/Application/Create/HarvestCreator';
import { HarvestId } from '../../../../../src/Fungus/Harvests/Domain/HarvestId';
import { MushroomId } from '../../../../../src/Fungus/Shared/Domain/MushroomId';
import { HarvestAlreadyExist } from '../../../../../src/Fungus/Harvests/Domain/HarvestAlreadyExist';
import { MushroomDoesNotExist } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomDoesNotExist';
import { LocationId } from '../../../../../src/Fungus/Shared/Domain/LocationId';

import { Controller } from '../Controller';
import { LocationDoesNotExist } from '../../../../../src/Fungus/Locations/Domain/LocationDoesNotExist';

export default class HarvestsPutController implements Controller {
  harvestCreator: HarvestCreator;

  constructor(harvestCreator: HarvestCreator) {
    this.harvestCreator = harvestCreator;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const harvestId = req.params.id;
    // @ts-ignore
    const { date, mushroomId, locationId, quantity } = req.payload;

    try {
      await this.harvestCreator.run({
        id: new HarvestId(harvestId),
        mushroomId: new MushroomId(mushroomId),
        locationId: new LocationId(locationId),
        date,
        quantity,
      });
    } catch (error) {
      console.error(error.message);

      if (
        error instanceof HarvestAlreadyExist ||
        error instanceof MushroomDoesNotExist ||
        error instanceof LocationDoesNotExist
      ) {
        return res.response(error.message).code(httpStatus.BAD_REQUEST);
      } else {
        return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    return res.response().code(httpStatus.CREATED);
  }
}

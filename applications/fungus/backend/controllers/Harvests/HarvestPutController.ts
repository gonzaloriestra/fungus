import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import HarvestCreator from '../../../../../src/Fungus/Harvests/Application/Create/HarvestCreator';

import { Controller } from '../Controller';
import { HarvestId } from '../../../../../src/Fungus/Harvests/Domain/HarvestId';
import { MushroomId } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomId';
import { HarvestAlreadyExist } from '../../../../../src/Fungus/Harvests/Domain/HarvestAlreadyExist';
import { MushroomDoesNotExist } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomDoesNotExist';

export default class HarvestPutController implements Controller {
  harvestCreator: HarvestCreator;

  constructor(harvestCreator: HarvestCreator) {
    this.harvestCreator = harvestCreator;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const harvestId = req.params.id;
    // @ts-ignore
    const { date, mushroomId, quantity } = req.payload;

    try {
      await this.harvestCreator.invoke({
        id: new HarvestId(harvestId),
        mushroomId: new MushroomId(mushroomId),
        date,
        quantity,
      });
    } catch (error) {
      if (error instanceof HarvestAlreadyExist || error instanceof MushroomDoesNotExist) {
        return res.response(error.message).code(httpStatus.BAD_REQUEST);
      } else {
        return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    return res.response().code(httpStatus.CREATED);
  }
}

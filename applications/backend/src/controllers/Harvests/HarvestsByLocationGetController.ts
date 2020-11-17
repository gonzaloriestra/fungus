import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import { LocationId } from '../../../../../src/Fungus/Shared/Domain/LocationId';
import HarvestsByLocationFinder from '../../../../../src/Fungus/Harvests/Application/FindByLocation/HarvestsByLocationFinder';

import { Controller } from '../Controller';

export default class HarvestsByLocationGetController implements Controller {
  harvestsByLocationFinder: HarvestsByLocationFinder;

  constructor(harvestsByLocationFinder: HarvestsByLocationFinder) {
    this.harvestsByLocationFinder = harvestsByLocationFinder;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const locationId = new LocationId(req.params.id);

      const harvests = await this.harvestsByLocationFinder.invoke({ locationId });

      if (!harvests.data.length) {
        return res.response().code(httpStatus.NOT_FOUND);
      }

      return res.response(harvests.data).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

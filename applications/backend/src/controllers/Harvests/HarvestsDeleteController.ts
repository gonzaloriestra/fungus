import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import httpStatus from 'http-status';

import { Controller } from '../Controller';
import HarvestCleaner from '../../../../../src/Fungus/Harvests/Application/Clean/HarvestCleaner';

export default class HarvestsDeleteController implements Controller {
  harvestCleaner: HarvestCleaner;

  constructor(harvestCleaner: HarvestCleaner) {
    this.harvestCleaner = harvestCleaner;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      await this.harvestCleaner.run();

      return res.response().code(httpStatus.NO_CONTENT);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import HarvestRegistration from '../../../../../src/Fungus/Harvests/Application/Register/HarvestRegistration';

import { Controller } from '../Controller';
import { HarvestId } from '../../../../../src/Fungus/Harvests/Domain/HarvestId';

export default class HarvestPutController implements Controller {
  harvestRegistration: HarvestRegistration;

  constructor(harvestRegistration: HarvestRegistration) {
    this.harvestRegistration = harvestRegistration;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const harvestId = req.params.id;
    // @ts-ignore

    const { date, quantity } = req.payload;

    this.harvestRegistration.invoke({ id: new HarvestId(harvestId), date, quantity });

    return res.response().code(httpStatus.CREATED);
  }
}

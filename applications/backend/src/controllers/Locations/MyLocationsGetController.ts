import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import httpStatus from 'http-status';

import LocationsByUserIdFinder from '../../../../../src/Fungus/Locations/Application/FindByUserId/LocationsByUserIdFinder';
import { UserId } from '../../../../../src/Fungus/Shared/Domain/UserId';

import { Controller } from '../Controller';

export default class MyLocationsGetController implements Controller {
  locationsFinder: LocationsByUserIdFinder;

  constructor(locationsFinder: LocationsByUserIdFinder) {
    this.locationsFinder = locationsFinder;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const { userId } = req.auth?.credentials as { userId: string };

      const response = await this.locationsFinder.run({ userId: new UserId(userId) });

      return res.response(response.locations).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

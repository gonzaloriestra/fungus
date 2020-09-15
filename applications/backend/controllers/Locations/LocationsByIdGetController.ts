import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import { LocationId } from '../../../../src/Fungus/Locations/Domain/LocationId';
import LocationByIdFinder from '../../../../src/Fungus/Locations/Application/FindById/LocationByIdFinder';

import { Controller } from '../Controller';

export default class LocationsByIdGetController implements Controller {
  locationByIdFinder: LocationByIdFinder;

  constructor(locationByIdFinder: LocationByIdFinder) {
    this.locationByIdFinder = locationByIdFinder;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const locationId = new LocationId(req.params.id);
      const location = await this.locationByIdFinder.invoke(locationId);

      if (!location.data) {
        return res.response().code(httpStatus.NOT_FOUND);
      }

      return res.response(location.data).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

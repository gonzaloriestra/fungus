import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import { LocationId } from '../../../../../src/Fungus/Shared/Domain/Locations/LocationId';
import LocationByIdFinder from '../../../../../src/Fungus/Locations/Application/FindById/LocationByIdFinder';

import { Controller } from '../Controller';
import { LocationDoesNotExist } from '../../../../../src/Fungus/Locations/Domain/LocationDoesNotExist';

export default class LocationByIdGetController implements Controller {
  locationByIdFinder: LocationByIdFinder;

  constructor(locationByIdFinder: LocationByIdFinder) {
    this.locationByIdFinder = locationByIdFinder;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const locationId = new LocationId(req.params.id);

      const response = await this.locationByIdFinder.run({ locationId });

      return res.response(response.data).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      if (error instanceof LocationDoesNotExist) {
        return res.response().code(httpStatus.NOT_FOUND);
      }

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

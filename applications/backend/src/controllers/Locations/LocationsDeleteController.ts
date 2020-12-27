import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import { LocationCleaner } from '../../../../../src/Fungus/Locations/Application/Clean/LocationCleaner';

import { Controller } from '../Controller';

export default class LocationsDeleteController implements Controller {
  locationCleaner: LocationCleaner;

  constructor(locationCleaner: LocationCleaner) {
    this.locationCleaner = locationCleaner;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      await this.locationCleaner.run();

      return res.response().code(httpStatus.NO_CONTENT);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

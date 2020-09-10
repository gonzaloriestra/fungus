import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import { Controller } from '../Controller';
import LocationCleaner from '../../../../../Fungus/Locations/Application/Clean/LocationCleaner';

export default class LocationsDeleteController implements Controller {
  locationCleaner: LocationCleaner;

  constructor(locationCleaner: LocationCleaner) {
    this.locationCleaner = locationCleaner;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      await this.locationCleaner.invoke();

      return res.response().code(httpStatus.NO_CONTENT);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import LocationsFinder from '../../../../../src/Fungus/Locations/Application/Find/LocationsFinder';

import { Controller } from '../Controller';

export default class LocationsGetController implements Controller {
  locationsFinder: LocationsFinder;

  constructor(locationsFinder: LocationsFinder) {
    this.locationsFinder = locationsFinder;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const response = await this.locationsFinder.run();

      return res.response(response.locations).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

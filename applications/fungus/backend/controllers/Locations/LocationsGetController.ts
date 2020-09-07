import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import { Controller } from '../Controller';
import LocationFinder from '../../../../../src/Fungus/Locations/Application/Find/LocationFinder';

export default class LocationsGetController implements Controller {
  locationReader: LocationFinder;

  constructor(locationReader: LocationFinder) {
    this.locationReader = locationReader;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const locations = await this.locationReader.invoke();

      return res.response(locations.data).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import { Controller } from '../Controller';
import LocationReader from '../../../../../src/Fungus/Locations/Application/Read/LocationReader';

export default class LocationsGetController implements Controller {
  locationReader: LocationReader;

  constructor(locationReader: LocationReader) {
    this.locationReader = locationReader;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      await this.locationReader.invoke();
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
    return res.response().code(httpStatus.OK);
  }
}

import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import LocationCreator from '../../../../../src/Fungus/Locations/Application/Create/LocationCreator';
import { LocationId } from '../../../../../src/Fungus/Locations/Domain/LocationId';
import { LocationAlreadyExist } from '../../../../../src/Fungus/Locations/Domain/LocationAlreadyExist';

import { Controller } from '../Controller';

export default class LocationPutController implements Controller {
  locationCreator: LocationCreator;

  constructor(locationCreator: LocationCreator) {
    this.locationCreator = locationCreator;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const locationId = req.params.id;
    // @ts-ignore
    const { name, coordinates } = req.payload;

    try {
      await this.locationCreator.invoke({ id: new LocationId(locationId), name, coordinates });
    } catch (error) {
      console.error(error.message);

      if (error instanceof LocationAlreadyExist) {
        return res.response(error.message).code(httpStatus.BAD_REQUEST);
      } else {
        return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    return res.response().code(httpStatus.CREATED);
  }
}

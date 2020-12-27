import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import LocationCreator from '../../../../../src/Fungus/Locations/Application/Create/LocationCreator';
import { LocationId } from '../../../../../src/Fungus/Shared/Domain/Locations/LocationId';
import { Zone } from '../../../../../src/Fungus/Locations/Domain/Zone';
import { LocationAlreadyExist } from '../../../../../src/Fungus/Locations/Domain/LocationAlreadyExist';
import { Coordinate } from '../../../../../src/Fungus/Locations/Domain/Coordinate';

import { Controller } from '../Controller';

export default class LocationPutController implements Controller {
  locationCreator: LocationCreator;

  constructor(locationCreator: LocationCreator) {
    this.locationCreator = locationCreator;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const locationId = req.params.id;
    const { name, coordinates } = req.payload as {
      name: string;
      coordinates: Array<{ latitude: number; longitude: number }>;
    };

    try {
      await this.locationCreator.run({
        id: new LocationId(locationId),
        name,
        zone: new Zone({ coordinates: coordinates.map((coordinate) => new Coordinate(coordinate)) }),
      });
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

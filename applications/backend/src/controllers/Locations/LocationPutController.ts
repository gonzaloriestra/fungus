import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import httpStatus from 'http-status';

import { LocationId } from '../../../../../src/Fungus/Shared/Domain/LocationId';
import { UserId } from '../../../../../src/Fungus/Shared/Domain/UserId';
import { Coordinate } from '../../../../../src/Fungus/Shared/Domain/Coordinate';
import { WeatherStationId } from '../../../../../src/Fungus/Shared/Domain/WeatherStationId';

import { LocationCreator } from '../../../../../src/Fungus/Locations/Application/Create/LocationCreator';
import { LocationAlreadyExist } from '../../../../../src/Fungus/Locations/Domain/LocationAlreadyExist';
import { Zone } from '../../../../../src/Fungus/Locations/Domain/Zone';

import { Controller } from '../Controller';

export default class LocationPutController implements Controller {
  locationCreator: LocationCreator;

  constructor(locationCreator: LocationCreator) {
    this.locationCreator = locationCreator;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const { userId } = req.auth?.credentials as { userId: string };
    const locationId = req.params.id;
    const { name, coordinates, weatherStationId } = req.payload as {
      name: string;
      coordinates: Array<{ latitude: number; longitude: number }>;
      weatherStationId: string;
    };

    try {
      await this.locationCreator.run({
        id: new LocationId(locationId),
        name,
        zone: new Zone({ coordinates: coordinates.map((coordinate) => new Coordinate(coordinate)) }),
        weatherStationId: weatherStationId ? new WeatherStationId(weatherStationId) : undefined,
        userId: new UserId(userId),
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

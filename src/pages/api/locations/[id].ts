import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';

import { LocationId } from '../../../Fungus/Shared/Domain/LocationId';
import { UserId } from '../../../Fungus/Shared/Domain/UserId';
import { WeatherStationId } from '../../../Fungus/Shared/Domain/WeatherStationId';
import { Coordinate } from '../../../Fungus/Shared/Domain/Coordinate';
import { LocationDoesNotExist } from '../../../Fungus/Shared/Domain/LocationDoesNotExist';

import locationsByIdFinder from '../../../Fungus/Locations/Application/FindById';
import locationCreator from '../../../Fungus/Locations/Application/Create';

import { LocationAlreadyExist } from '../../../Fungus/Locations/Domain/LocationAlreadyExist';
import { Zone } from '../../../Fungus/Locations/Domain/Zone';

import CoordinateModel from '../../../models/Coordinate';

export default withApiAuthRequired(async function (req, res) {
  try {
    const locationId = req.query.id as string;

    if (req.method === 'GET') {
      const result = await locationsByIdFinder.run({ locationId: new LocationId(locationId) });

      res.status(httpStatus.OK).json(result.location);
      res.end();
    } else {
      const session = getSession(req, res);
      const userId = session?.user['http://fungus/user_id'];
      const { name, coordinates, weatherStationId } = JSON.parse(req.body);

      await locationCreator.run({
        id: new LocationId(locationId),
        name,
        zone: new Zone({ coordinates: coordinates.map((coordinate: CoordinateModel) => new Coordinate(coordinate)) }),
        weatherStationId: weatherStationId ? new WeatherStationId(weatherStationId) : undefined,
        userId: new UserId(userId),
      });

      res.status(httpStatus.CREATED).end();
    }
  } catch (error: any) {
    console.error(error.message);
    // ToDo avoid this defining the exception with and error code ???
    if (error instanceof LocationDoesNotExist) {
      res.status(httpStatus.NOT_FOUND).end(error.message);
      // ToDo avoid this defining the exception with and error code ???
    } else if (error instanceof LocationAlreadyExist) {
      res.status(httpStatus.BAD_REQUEST).end(error.message);
    } else {
      res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
    }
  }
});

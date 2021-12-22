import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';

import { LocationId } from '../../../Fungus/Shared/Domain/LocationId';
import { UserId } from '../../../Fungus/Shared/Domain/UserId';

import locationsByIdFinder from '../../../Fungus/Locations/Application/FindById';
import locationCreator from '../../../Fungus/Locations/Application/Create';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const locationId = req.query.locationId as string;

    if (req.method === 'GET') {
      const result = await locationsByIdFinder.run({ locationId: new LocationId(locationId) });

      res.status(httpStatus.OK).json(result.location);
      res.end();
    } else {
      const { user } = getSession(req, res);
      const userId = user['http://fungus/user_id'];
      const { name, zone } = JSON.parse(req.body);

      await locationCreator.run({
        id: new LocationId(locationId),
        name,
        zone,
        userId: new UserId(userId),
      });

      res.status(httpStatus.CREATED).end();
    }
  } catch (error) {
    console.error(error.message);

    return res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
  }
});

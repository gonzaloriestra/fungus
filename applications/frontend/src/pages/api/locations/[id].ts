import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';

import addLocation from '../../../actions/server/locations/addLocation';

import { LocationId } from '../../../Fungus/Shared/Domain/LocationId';
import locationsByIdFinder from '../../../Fungus/Locations/Application/FindById';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const locationId = req.query.locationId as string;

    if (req.method === 'GET') {
      try {
        const result = await locationsByIdFinder.run({ locationId: new LocationId(locationId) });

        res.status(httpStatus.OK).json(result.location);
        res.end();
      } catch (error) {
        console.error(error.message);

        return res.status(httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
      }
    } else {
      const { name, zone } = JSON.parse(req.body);
      
      // await addLocation({ id, body: { name, coordinates: zone }, accessToken });

      res.status(201).end();
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';
import harvestsByLocationFinder from '../../../Fungus/Harvests/Application/FindByLocation';

import { LocationId } from '../../../Fungus/Shared/Domain/LocationId';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const locationId = req.query.locationId as string;

    const result = await harvestsByLocationFinder.run({ locationId: new LocationId(locationId) });

    res.status(httpStatus.OK).json(result.harvests);
    res.end();
  } catch (error: any) {
    console.error(error);
    res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
  }
});

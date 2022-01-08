import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';
import predictor from '../../../Fungus/Predictions/Application/Make';

import { LocationId } from '../../../Fungus/Shared/Domain/LocationId';
import { MushroomId } from '../../../Fungus/Shared/Domain/MushroomId';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const locationId = req.query.locationId as string;
    const mushroomId = req.query.mushroomId as string;
    const date = req.query.date as string;

    const result = await predictor.run({
      date: new Date(date),
      mushroomId: new MushroomId(mushroomId),
      locationId: new LocationId(locationId),
    });

    res.status(httpStatus.OK).json(result.prediction);
    res.end();
  } catch (error) {
    console.error(error.message);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
  }
});

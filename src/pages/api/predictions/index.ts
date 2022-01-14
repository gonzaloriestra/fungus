import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';

import { LocationDoesNotExist } from '../../../Fungus/Shared/Domain/LocationDoesNotExist';
import { LocationId } from '../../../Fungus/Shared/Domain/LocationId';
import { MushroomId } from '../../../Fungus/Shared/Domain/MushroomId';

import predictor from '../../../Fungus/Predictions/Application/Make';

export default withApiAuthRequired(async function (req, res) {
  try {
    const locationId = req.query.locationId as string;
    const mushroomId = req.query.mushroomId as string;
    const date = req.query.date as string;

    const result = await predictor.run({
      date: new Date(date),
      mushroomId: new MushroomId(mushroomId),
      locationId: new LocationId(locationId),
    });

    if (!result.prediction) {
      res.status(httpStatus.NOT_FOUND).end();
    }

    res.status(httpStatus.OK).json(result.prediction);
    res.end();
  } catch (error: any) {
    console.error(error.message);

    if (error instanceof LocationDoesNotExist) {
      res.status(httpStatus.NOT_FOUND).end(error.message);
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
  }
});

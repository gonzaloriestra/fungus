import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';

// ToDo from another module
import { HarvestAlreadyExist } from '../../../Fungus/Harvests/Domain/HarvestAlreadyExist';
import { MushroomDoesNotExist } from '../../../Fungus/Mushrooms/Domain/MushroomDoesNotExist';

import { LocationId } from '../../../Fungus/Shared/Domain/LocationId';
import { MushroomId } from '../../../Fungus/Shared/Domain/MushroomId';
import { LocationDoesNotExist } from '../../../Fungus/Shared/Domain/LocationDoesNotExist';

import { HarvestId } from '../../../Fungus/Harvests/Domain/HarvestId';

import harvestCreator from '../../../Fungus/Harvests/Application/Create';

export default withApiAuthRequired(async function (req, res) {
  try {
    const id = req.query.id as string;
    const { mushroomId, locationId, date, quantity } = JSON.parse(req.body);

    await harvestCreator.run({
      id: new HarvestId(id),
      mushroomId: new MushroomId(mushroomId),
      locationId: new LocationId(locationId),
      date,
      quantity,
    });

    res.status(httpStatus.CREATED).end();
  } catch (error: any) {
    // To-Do Custom error cuando la harvest no se ha podido añadir
    console.error(error.message);

    if (
      error instanceof HarvestAlreadyExist ||
      error instanceof MushroomDoesNotExist ||
      error instanceof LocationDoesNotExist
    ) {
      res.status(httpStatus.BAD_REQUEST).end(error.message);
    }

    res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
  }
});

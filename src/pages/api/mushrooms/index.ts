import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';

import mushroomsFinder from '../../../Fungus/Mushrooms/Application/Find';

export default withApiAuthRequired(async function (req, res) {
  try {
    const result = await mushroomsFinder.run();

    res.status(httpStatus.OK).json(result.mushrooms);
    res.end();
  } catch (error) {
    console.error(error.message);

    return res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
  }
});

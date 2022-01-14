import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';

import { UserId } from '../../../Fungus/Shared/Domain/UserId';
import locationsByUserIdFinder from '../../../Fungus/Locations/Application/FindByUserId';

export default withApiAuthRequired(async function (req, res) {
  const session = getSession(req, res);

  const userId = session?.user['http://fungus/user_id'];

  try {
    const result = await locationsByUserIdFinder.run({ userId: new UserId(userId) });

    res.status(httpStatus.OK).json(result.locations);
    res.end();
  } catch (error: any) {
    console.error(error.message);

    res.status(httpStatus.INTERNAL_SERVER_ERROR).end(error.message);
  }
});

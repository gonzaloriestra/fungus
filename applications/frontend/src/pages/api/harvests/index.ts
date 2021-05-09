import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import getByLocationId from '../../../actions/server/harvests/getByLocationId';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const locationId = req.query.locationId;

    const { accessToken } = await getAccessToken(req, res);

    const harvests = await getByLocationId({ locationId, accessToken });

    res.status(200).json(harvests);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

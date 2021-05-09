import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import getByLocation from '../../../actions/serverSide/harvests/getByLocation';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const locationId = req.query.locationId;

    const { accessToken } = await getAccessToken(req, res);

    const harvests = await getByLocation({ locationId, accessToken });

    res.status(200).json(harvests);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

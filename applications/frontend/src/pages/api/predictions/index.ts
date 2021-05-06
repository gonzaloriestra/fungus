import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import BackendClient from '../../../actions/commands/BackendClient';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const locationId = req.query.locationId;
    const mushroomId = req.query.mushroomId;
    const date = req.query.date;

    const { accessToken } = await getAccessToken(req, res);

    const result = await BackendClient.get({
      path: `/locations/${locationId}/mushrooms/${mushroomId}/predictions?date=${date}`,
      accessToken,
    });

    res.status(200).json(result);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

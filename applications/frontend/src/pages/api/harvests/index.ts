import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import BackendClient from '../BackendClient';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const locationId = req.query.locationId;

    const { accessToken } = await getAccessToken(req, res);

    const result = await BackendClient.get({
      path: `/locations/${locationId}/harvests`,
      accessToken,
    });

    res.status(200).json(result);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import getMyLocations from '../../../actions/server/locations/getMyLocations';

export default withApiAuthRequired(async function (req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);

    const result = await getMyLocations({ accessToken });

    res.status(200).json(result);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

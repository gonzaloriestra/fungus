import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import BackendClient from '../../../commands/BackendClient';

export default withApiAuthRequired(async function (req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);

    const result = await BackendClient.get({ path: '/mushrooms', accessToken });

    res.status(200).json(result.data);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

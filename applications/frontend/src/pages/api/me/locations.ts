import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import client from '../../../queries/client';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);

    // To-Do create a API client for locations const client = new BillingApiClient(accessToken);
    const result = await client.get({ path: '/me/locations', accessToken });

    res.status(200).json(result.data);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

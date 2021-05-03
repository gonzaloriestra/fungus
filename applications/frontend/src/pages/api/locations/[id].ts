import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import axios from 'axios';

import BackendClient from '../../../commands/BackendClient';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const id = req.query.id;

    const { accessToken } = await getAccessToken(req, res);

    if (req.method === 'GET') {
      const result = await BackendClient.get({ path: `/locations/${id}`, accessToken });

      res.status(200).json(result.data);
      res.end();
    } else {
      const { name, zone } = JSON.parse(req.body);
      // To-Do create a API client for locations const client = new BillingApiClient(accessToken);
      await axios.put(
        `http://localhost:3001/locations/${id}`,
        { name, coordinates: zone },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      res.status(201).end();
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

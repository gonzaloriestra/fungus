import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import axios from 'axios';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const id = req.query.id;
    const { name, zone } = JSON.parse(req.body);

    const { accessToken } = await getAccessToken(req, res);

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
    res.status(201);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

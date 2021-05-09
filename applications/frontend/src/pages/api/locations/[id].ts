import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import BackendClient from '../BackendClient';
import addLocation from '../../../actions/server/locations/addLocation';

export default withApiAuthRequired(async function locations(req, res) {
  try {
    const id = req.query.id;

    const { accessToken } = await getAccessToken(req, res);

    if (req.method === 'GET') {
      const result = await BackendClient.get({ path: `/locations/${id}`, accessToken });

      res.status(200).json(result);
      res.end();
    } else {
      const { name, zone } = JSON.parse(req.body);

      await addLocation({ id, body: { name, coordinates: zone }, accessToken });

      res.status(201).end();
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

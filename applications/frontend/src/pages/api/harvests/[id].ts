import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import BackendClient from '../../../queries/BackendClient';

export default withApiAuthRequired(async function (req, res) {
  try {
    const id = req.query.id;
    const body = JSON.parse(req.body);

    const { accessToken } = await getAccessToken(req, res);

    const response = await BackendClient.put({ path: `/harvests/${id}`, body, accessToken });

    res.status(response.status).end();
  } catch (error) {
    // To-Do Custom error cuando la harvest no se ha podido añadir
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

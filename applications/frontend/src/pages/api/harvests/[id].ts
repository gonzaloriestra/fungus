import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import addHarvest from '../../../actions/server/harvests/addHarvest';

export default withApiAuthRequired(async function (req, res) {
  try {
    const id = req.query.id;
    const body = JSON.parse(req.body);

    const { accessToken } = await getAccessToken(req, res);

    await addHarvest({ id, body, accessToken });

    res.status(201).end();
  } catch (error) {
    // To-Do Custom error cuando la harvest no se ha podido añadir
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
});

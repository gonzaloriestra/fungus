import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import httpStatus from 'http-status';

export default withApiAuthRequired(async function locations(req, res) {
  res.status(httpStatus.OK).end();
});

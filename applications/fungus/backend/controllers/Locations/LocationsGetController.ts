import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import { Controller } from '../Controller';

export default class LocationsGetController implements Controller {
  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    return res.response().code(httpStatus.OK);
  }
}

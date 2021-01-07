import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import httpStatus from 'http-status';

import { Controller } from '../Controller';

export default class StatusGetController implements Controller {
  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    return res.response().code(httpStatus.OK);
  }
}

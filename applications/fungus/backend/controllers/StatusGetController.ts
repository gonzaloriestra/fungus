import { Request, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export default class StatusGetController implements Controller {
  async run(req: Request, res: ResponseToolkit): Promise<void> {
    res.response().code(httpStatus.OK);
  }
}

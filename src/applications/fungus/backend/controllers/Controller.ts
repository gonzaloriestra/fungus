import { Request, ResponseObject, ResponseToolkit } from 'hapi';

export interface Controller {
  run(req: Request, res: ResponseToolkit): Promise<ResponseObject>;
}

import { Request, ResponseToolkit } from 'hapi';

export interface Controller {
  run(req: Request, res: ResponseToolkit): Promise<void>;
}

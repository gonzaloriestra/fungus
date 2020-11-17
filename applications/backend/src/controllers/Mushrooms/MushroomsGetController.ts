import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import MushroomsSearcher from '../../../../../src/Fungus/Mushrooms/Application/SearchAll/MushroomsSearcher';

import { Controller } from '../Controller';

export default class MushroomsGetController implements Controller {
  mushroomsSearcher: MushroomsSearcher;

  constructor(mushroomsSearcher: MushroomsSearcher) {
    this.mushroomsSearcher = mushroomsSearcher;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const response = await this.mushroomsSearcher.run();

      return res.response(response.mushrooms).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

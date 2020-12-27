import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import MushroomsFinder from '../../../../../src/Fungus/Mushrooms/Application/Find/MushroomsFinder';

import { Controller } from '../Controller';

export default class MushroomsGetController implements Controller {
  mushroomsFinder: MushroomsFinder;

  constructor(mushroomsFinder: MushroomsFinder) {
    this.mushroomsFinder = mushroomsFinder;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const response = await this.mushroomsFinder.run();

      return res.response(response.mushrooms).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

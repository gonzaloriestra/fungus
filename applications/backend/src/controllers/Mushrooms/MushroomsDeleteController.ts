import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import httpStatus from 'http-status';

import { Controller } from '../Controller';
import { MushroomsCleaner } from '../../../../../src/Fungus/Mushrooms/Application/Clean/MushroomsCleaner';

export default class MushroomsDeleteController implements Controller {
  mushroomsCleaner: MushroomsCleaner;

  constructor(mushroomsCleaner: MushroomsCleaner) {
    this.mushroomsCleaner = mushroomsCleaner;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      await this.mushroomsCleaner.run();

      return res.response().code(httpStatus.NO_CONTENT);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

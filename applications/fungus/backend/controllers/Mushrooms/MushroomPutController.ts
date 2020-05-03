import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import MushroomCreator from '../../../../../src/Fungus/Mushrooms/Application/Create/MushroomCreator';
import { MushroomId } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomId';
import { MushroomWithSameScientificNameAlreadyExist } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomWithSameScientificNameAlreadyExist';

import { Controller } from '../Controller';

export default class MushroomPutController implements Controller {
  mushroomCreator: MushroomCreator;

  constructor(mushroomCreator: MushroomCreator) {
    this.mushroomCreator = mushroomCreator;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const mushroomId = req.params.id;
    // @ts-ignore
    const { scientificName } = req.payload;

    try {
      await this.mushroomCreator.invoke({ id: new MushroomId(mushroomId), scientificName });
    } catch (error) {
      console.error(error.message);

      if (error instanceof MushroomWithSameScientificNameAlreadyExist) {
        return res.response(error.message).code(httpStatus.BAD_REQUEST);
      } else {
        return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    return res.response().code(httpStatus.CREATED);
  }
}

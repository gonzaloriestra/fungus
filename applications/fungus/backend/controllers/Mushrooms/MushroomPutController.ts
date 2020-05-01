import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import MushroomCreator from '../../../../../src/Fungus/Mushrooms/Application/Create/MushroomCreator';

import { Controller } from '../Controller';
import { MushroomId } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomId';

export default class MushroomPutController implements Controller {
  mushroomCreator: MushroomCreator;

  constructor(mushroomCreator: MushroomCreator) {
    this.mushroomCreator = mushroomCreator;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const mushroomId = req.params.id;
    // @ts-ignore
    const { scientificName } = req.payload;

    this.mushroomCreator.invoke({ id: new MushroomId(mushroomId), scientificName });

    return res.response().code(httpStatus.CREATED);
  }
}

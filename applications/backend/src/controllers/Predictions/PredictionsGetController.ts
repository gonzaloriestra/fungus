import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import httpStatus from 'http-status';

import { MushroomId } from '../../../../../src/Fungus/Shared/Domain/MushroomId';
import { LocationId } from '../../../../../src/Fungus/Shared/Domain/LocationId';

import Predictor from '../../../../../src/Fungus/Predictions/Application/Make/Predictor';

import { Controller } from '../Controller';
import { LocationDoesNotExist } from '../../../../../src/Fungus/Shared/Domain/LocationDoesNotExist';

export default class PredictionsGetController implements Controller {
  private readonly _predictor: Predictor;

  constructor(predictor: Predictor) {
    this._predictor = predictor;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const date = new Date(req.query.date as string);
      const { locationId, mushroomId } = req.params;

      const response = await this._predictor.run({
        date,
        locationId: new LocationId(locationId),
        mushroomId: new MushroomId(mushroomId),
      });

      if (!response.prediction) {
        return res.response().code(httpStatus.NOT_FOUND);
      }

      return res.response(response.prediction).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      if (error instanceof LocationDoesNotExist) {
        return res.response(error.message).code(httpStatus.NOT_FOUND);
      }

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import httpStatus from 'http-status';

import ForecastsGenerator from '../../../../../src/Fungus/Forecasts/Application/Generate/ForecastsGenerator';

import { Controller } from '../Controller';

export default class ForecastsGetController implements Controller {
  forecastsGenerator: ForecastsGenerator;

  constructor(forecastsGenerator: ForecastsGenerator) {
    this.forecastsGenerator = forecastsGenerator;
  }

  async run(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const date = new Date(req.query.date as string);

      const forecasts = await this.forecastsGenerator.run({ date });

      // @ts-ignore
      if (!forecasts.data) {
        return res.response().code(httpStatus.NOT_FOUND);
      }
      // @ts-ignore
      return res.response(forecasts.data).code(httpStatus.OK);
    } catch (error) {
      console.error(error.message);

      return res.response(error.message).code(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

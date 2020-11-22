// import { HarvestRepository } from '../../Domain/HarvestRepository';

import { GenerateForecastsResponse } from './GenerateForecastsResponse';
import { GenerateForecastsRequest } from './GenerateForecastsRequest';

export default class ForecastsGenerator {
  // repository: HarvestRepository;
  //
  // constructor(repository: HarvestRepository) {
  //   this.repository = repository;
  // }

  run({ date }: GenerateForecastsRequest): object {
    // const harvests = this.repository.all();

    // To-Do user the GenerateForecastsResponse
    return {
      data: {
        date: '2020-11-10',
        forecasts: [
          {
            locationId: '85c2cec-f362-432e-a136-5440816a584b',
            probability: '100',
          },
        ],
      },
    };
  }
}

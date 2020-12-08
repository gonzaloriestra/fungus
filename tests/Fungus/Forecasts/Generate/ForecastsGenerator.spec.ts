import Date from '../../../../src/Fungus/Shared/Domain/Date';

import ForecastsGenerator from '../../../../src/Fungus/Forecasts/Application/Generate/ForecastsGenerator';

import LocationQueryMock from '../../Shared/Application/Locations/LocationQueryMock';
import LocationViewMother from '../../Shared/Application/Locations/LocationViewMother';
import HarvestQueryMock from '../../Shared/Application/Harvests/HarvestQueryMock';
import HarvestsViewMother from '../../Shared/Application/Harvests/HarvestsViewMother';
import HarvestViewMother from '../../Shared/Application/Harvests/HarvestViewMother';

describe('ForecastsGenerator', () => {
  let mockLocationQuery: LocationQueryMock;
  let mockHarvestQuery: HarvestQueryMock;

  beforeEach(() => {
    mockLocationQuery = new LocationQueryMock();
    mockHarvestQuery = new HarvestQueryMock();
  });

  test.each([
    ['2020-12-18', ['2020-12-19'], 354, 9048],
    ['2020-12-18', ['2020-12-19'], 354, 9048],
    ['2020-12-19', ['2020-12-19'], 354, 10000],
    ['2020-11-10', ['2020-11-10', '2020-12-10'], 330, 0],
  ])(
    'should return the right probability based on your historical harvests',
    (forecastDay, harvestDates, median, expected) => {
      mockLocationQuery.returnOnAll([LocationViewMother.random()]);
      const harvests = harvestDates.map((harvestDate) =>
        HarvestViewMother.create({ date: new Date(harvestDate).toDateString() }),
      );
      // To-Do returnOnFilterBy when the param is...
      mockHarvestQuery.returnOnFilterBy(HarvestsViewMother.create({ harvests, median }));
      const subject = new ForecastsGenerator(mockLocationQuery, mockHarvestQuery);

      const response = subject.run({ date: new Date(forecastDay) });

      expect(response.data.forecasts[0].probability).toEqual(expected);
    },
  );
});

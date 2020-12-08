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

  it('should return 100 of probability when there is only one harvests for the specific day', () => {
    const forecastDay = new Date('2020-12-19');
    mockLocationQuery.returnOnAll([LocationViewMother.random()]);
    const harvest = HarvestViewMother.create({ date: forecastDay.toDateString() });
    // To-Do returnOnFilterBy when the param is...
    mockHarvestQuery.returnOnFilterBy(HarvestsViewMother.create({ harvests: [harvest], median: 354 }));
    const subject = new ForecastsGenerator(mockLocationQuery, mockHarvestQuery);

    const response = subject.run({ date: forecastDay });

    expect(response.data.forecasts[0].probability).toEqual(10000);
  });

  it('should return 0 for 2020-11-10 when we have harvests in 2020-11-10 and 2020-12-10', () => {
    const forecastDay = new Date('2020-11-10');
    mockLocationQuery.returnOnAll([LocationViewMother.random()]);
    const harvestNov = HarvestViewMother.create({ date: forecastDay.toDateString() });
    const harvestDec = HarvestViewMother.create({ date: '2020-12-10' });
    mockHarvestQuery.returnOnFilterBy(HarvestsViewMother.create({ harvests: [harvestNov, harvestDec], median: 330 }));
    const subject = new ForecastsGenerator(mockLocationQuery, mockHarvestQuery);

    const response = subject.run({ date: forecastDay });

    expect(response.data.forecasts[0].probability).toEqual(0);
  });

  it('should return 9048 (90.48%) when the forecast of for a day before of an unique harvest', () => {
    const forecastDay = new Date('2020-12-18');
    mockLocationQuery.returnOnAll([LocationViewMother.random()]);
    const harvest = HarvestViewMother.create({ date: new Date('2020-12-19').toDateString() });
    mockHarvestQuery.returnOnFilterBy(HarvestsViewMother.create({ harvests: [harvest], median: 354 }));
    const subject = new ForecastsGenerator(mockLocationQuery, mockHarvestQuery);

    const response = subject.run({ date: forecastDay });

    expect(response.data.forecasts[0].probability).toEqual(9048);
  });
});

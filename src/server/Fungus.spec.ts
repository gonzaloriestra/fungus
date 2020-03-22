import { Nieru } from './Fungus';

import { Map } from './valueObjects/Map';
import { MicoParameter } from './valueObjects/MicoParameter';
import { Harvest } from './valueObjects/Harvest';
import { Location } from './valueObjects/Location';

describe('Nieru', () => {;
  const today = new Date();
  const location = new Location({ id: '0001' });

  const map = new Map({locations: [location]});
  const micoParameters = [new MicoParameter()];
  const harvestHistory = [new Harvest({location, date: today})];

  const subject = new Nieru({map, micoParameters, harvestHistory});

  describe('in a day with good conditions for the harvest', () => {
    it('should return all forecasts to let us know where we could harvest mushrooms', () => {
      const forecasts = subject.foretell(today);

      expect(forecasts.length).toBeGreaterThan(0);
    });

    it('should return locations which are defined in the initial map', () => {
      const forecasts = subject.foretell(today);

      forecasts.forEach((forecast) => {
        expect(map.includes(forecast.getLocation())).toBeTruthy();
      });
    });

    it('should include species which can be recollected in each location', () => {
      const forecasts = subject.foretell(today);

      forecasts.forEach(forecast => {
        expect(forecast.getLocation()).toBeInstanceOf(Location);
        expect(forecast.getMushrooms()).toBeInstanceOf(Array);
      });
    });

    it('should include locations included in the harvest history registered in the same day', () => {
      const forecasts = subject.foretell(today);

      forecasts.forEach(forecast => {
        const harvest = harvestHistory.filter((harvest) => harvest.isEqual(new Harvest({ location: forecast.getLocation(), date: today })));

        expect(harvest).toBeDefined();
        expect(harvest[0].getDate()).toEqual(today);
      });
    });

    it('should NOT include locations from the harvest history which was registered in other day', () => {
      const pastDay = new Date('2019-12-19');
      const forecasts = subject.foretell(pastDay);

      forecasts.forEach(forecast => {
        const harvest = harvestHistory.filter((harvest) => harvest.isEqual(new Harvest({ location: forecast.getLocation(), date: today })));

        expect(harvest).toBeUndefined();
      });
    });
  });
});

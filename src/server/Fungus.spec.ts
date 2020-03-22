import { Fungus } from './Fungus';

import { Map } from './valueObjects/Map';
import { MicoParameter } from './valueObjects/MicoParameter';
import { Harvest } from './Domain/Model/Harvest/Harvest';
import { Location } from './valueObjects/Location';
import { Mushroom } from './valueObjects/Mushroom';
import { HarvestHistory } from './Domain/Model/Harvest/HarvestHistory';

describe('Fungus', () => {;
  const today = new Date();
  const location = new Location({ id: '0001' });

  describe('Harvest registration', () => {
    const subject = new Fungus();

    it('should be able to register a new harvest', () => {
      const harvest = new Harvest({ date: today, location, mushroom: new Mushroom(), quantity: 5 });
      subject.registerHarvest(harvest);

      expect(subject.getHarvests().count()).toEqual(1);
    });
  });






  describe('in a day with good conditions for the harvest', () => {
    const map = new Map({ locations: [location] });
    const micoParameters = [new MicoParameter()];
    const harvestHistory = new HarvestHistory();
    harvestHistory.add(new Harvest({ location, date: today, mushroom: new Mushroom(), quantity: 5 }));
    const subject = new Fungus({ map, micoParameters, harvestHistory });

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
        const harvests = harvestHistory.filterByLocation(forecast.getLocation());

        expect(harvests).toBeDefined();
        expect(harvests.toArray()[0].date()).toEqual(today);
      });
    });

    it('should NOT include locations from the harvest history which was registered in other day', () => {
      const pastDay = new Date('2019-12-19');
      const forecasts = subject.foretell(pastDay);

      forecasts.forEach(forecast => {
        const harvests = harvestHistory.filterByLocation(forecast.getLocation());

        expect(harvests).toBeUndefined();
      });
    });
  });


});

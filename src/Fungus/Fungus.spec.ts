import * as fs from 'fs';

import { Fungus } from './Fungus';

import { Map } from './Map';
import { Micoparam } from './Micoparams/Domain/Micoparam';
import { Harvest } from './Harvests/Domain/Harvest';
import { Location } from './Locations/Domain/Location';
import { Mushroom } from './Mushrooms/Domain/Mushroom';
import { FileHarvestRepository } from './Harvests/Infrastructure/FileHarvestRepository';

describe('Fungus', () => {
  const filePath = 'testHarvestRepostiory.txt';
  const today = new Date();
  const location = new Location();

  afterAll(() => {
    fs.unlinkSync(filePath);
  });

  describe('Harvest registration', () => {
    const harvestHistory = new FileHarvestRepository({ filePath });
    const subject = new Fungus({ harvestHistory });

    afterAll(() => {
      fs.unlinkSync(filePath);
    });

    it('should be able to register a new harvest', () => {
      const harvest = new Harvest({ date: today, location, mushroom: new Mushroom(), quantity: 5 });
      subject.registerHarvest(harvest);

      expect(subject.harvests().findById(harvest.id())).toBeDefined();
    });

    it('should allow to get harvest filter by date', () => {
      const pastDate = new Date('1985-12-19');

      const harvestOne = new Harvest({ date: today, location, mushroom: new Mushroom(), quantity: 5 });
      const harvestTwo = new Harvest({ date: pastDate, location, mushroom: new Mushroom(), quantity: 5 });
      const harvestThree = new Harvest({ date: pastDate, location, mushroom: new Mushroom(), quantity: 5 });

      subject.registerHarvest(harvestOne);
      subject.registerHarvest(harvestTwo);
      subject.registerHarvest(harvestThree);

      const filteredHarvest = subject.harvests().filterBy({ date: pastDate });

      expect(filteredHarvest.length).toEqual(2);
      expect(filteredHarvest[0].isEqual(harvestTwo)).toBeTruthy();
      expect(filteredHarvest[1].isEqual(harvestThree)).toBeTruthy();
    });
  });

  describe('in a day with good conditions for the harvest', () => {
    const map = new Map({ locations: [location] });
    const micoParameters = [new Micoparam()];
    const harvestHistory = new FileHarvestRepository({ filePath });
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

      forecasts.forEach((forecast) => {
        expect(forecast.getLocation()).toBeInstanceOf(Location);
        expect(forecast.getMushrooms()).toBeInstanceOf(Array);
      });
    });

    it('should include locations included in the harvest history registered in the same day', () => {
      const forecasts = subject.foretell(today);

      forecasts.forEach((forecast) => {
        const harvests = harvestHistory.filterBy({ location: forecast.getLocation() });

        expect(harvests).toBeDefined();
        expect(harvests[0].date()).toEqual(today);
      });
    });

    it('should NOT include locations from the harvest history which was registered in other day', () => {
      const pastDay = new Date('2019-12-19');
      const forecasts = subject.foretell(pastDay);

      forecasts.forEach((forecast) => {
        const harvests = harvestHistory.filterBy({ location: forecast.getLocation() });

        expect(harvests).toBeUndefined();
      });
    });
  });
});

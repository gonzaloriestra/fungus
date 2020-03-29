import * as fs from 'fs';

import { Harvest } from '../../../../Domain/Model/Harvest/Harvest';
import { Location } from '../../../../valueObjects/Location';

import { FileHarvestRepository } from './FileHarvestRepository';

describe('FileHarvestRespostory', () => {
  const filePath = 'testHarvestRepostiory.txt';

  describe('.fetch', () => {
    beforeAll(() => {
      const harvestRepository = new FileHarvestRepository({ filePath });
      const harvestOne = new Harvest({ location: new Location({ id: '0001' }), date: new Date() });
      const harvestTwo = new Harvest({ location: new Location({ id: '0002' }), date: new Date() });

      harvestRepository.add(harvestOne);
      harvestRepository.add(harvestTwo);
    });

    it('should populate all the harvests from the existing file', (done) => {
      const harvestRepository = new FileHarvestRepository({ filePath });

      harvestRepository.fetch({ onFinish: () => {
          expect(harvestRepository.count()).toEqual(2);
          done();
        }
      });
    });
  });


  describe('.add', () => {
    afterAll(() => {
      fs.unlinkSync(filePath);
    });

    it('should add a new Harvest to the repository', () => {
      const harvestRepository = new FileHarvestRepository({ filePath });
      const harvest = new Harvest({ location: new Location({ id: '0001' }), date: new Date()});

      harvestRepository.add(harvest);

      expect(harvestRepository.count()).toEqual(1);
    });
  });

  describe('.filterBy', () => {
    const today = new Date();
    const pastDate = new Date('1985-12-19');
    const locationOne = new Location({ id: '0001' });
    const locationTwo = new Location({ id: '0002' });

    const harvestRepository = new FileHarvestRepository({ filePath });
    const todayHarvest = new Harvest({ location: locationOne, date: today });
    const pastHarvest = new Harvest({ location: locationTwo, date: pastDate });

    beforeAll(() => {
      harvestRepository.add(todayHarvest);
      harvestRepository.add(pastHarvest);
    });

    afterAll(() => {
      fs.unlinkSync(filePath);
    });

    it('should return all harvests when no params are defined', () => {
      const result = harvestRepository.filterBy();

      expect(result.length).toEqual(2);
    });

    it('should filter by date', () => {
      const result = harvestRepository.filterBy({date: pastDate});

      expect(result.length).toEqual(1);
      expect(result[0].isEqual(pastHarvest)).toBeTruthy();
    });

    it('should filter by location', () => {
      const result = harvestRepository.filterBy({ location: locationOne });

      expect(result.length).toEqual(1);
      expect(result[0].isEqual(todayHarvest)).toBeTruthy();
    });
  });
});

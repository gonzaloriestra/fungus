import * as fs from 'fs';

import { Harvest } from '../../../../../src/Fungus/Harvests/Domain/Harvest';
import { Location } from '../../../../../src/Fungus/Locations/Domain/Location';

import { FileHarvestRepository } from '../../../../../src/Fungus/Harvests/Infrastructure/FileHarvestRepository';

describe('FileHarvestRepository', () => {
  const filePath = 'testHarvestRepository.txt';

  describe('.add', () => {
    afterAll(() => {
      fs.unlinkSync(filePath);
    });

    it('should add a new Harvest to the repository', () => {
      const harvestRepository = new FileHarvestRepository({ filePath });
      const harvest = new Harvest({ location: new Location(), date: new Date() });

      harvestRepository.add(harvest);

      expect(harvestRepository.count()).toEqual(1);
    });
  });

  describe('.findById', () => {
    afterAll(() => {
      fs.unlinkSync(filePath);
    });

    it('should find existing Harvest from the repository', () => {
      const harvestRepository = new FileHarvestRepository({ filePath });
      const harvest = new Harvest({ location: new Location(), date: new Date() });

      harvestRepository.add(harvest);

      expect(harvestRepository.findById(harvest.id())).toBeDefined();
    });

    it('should not find Harvest which are not included in the repository', () => {
      const harvestRepository = new FileHarvestRepository({ filePath });
      const harvest = new Harvest({ location: new Location(), date: new Date() });

      expect(harvestRepository.findById(harvest.id())).toBeUndefined();
    });
  });

  describe('.filterBy', () => {
    const today = new Date();
    const pastDate = new Date('1985-12-19');
    const locationOne = new Location();
    const locationTwo = new Location();

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
      const result = harvestRepository.filterBy({ date: pastDate });

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

import * as fs from 'fs';

import { Harvest } from '../../../../../src/Fungus/Harvests/Domain/Harvest';
import { FileHarvestRepository } from '../../../../../src/Fungus/Harvests/Infrastructure/FileHarvestRepository';
import { LocationId } from '../../../../../src/Fungus/Locations/Domain/LocationId';
import { Location } from '../../../../../src/Fungus/Locations/Domain/Location';
import { Area } from '../../../../../src/Fungus/Locations/Domain/Area';
import { MushroomId } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomId';

describe('FileHarvestRepository', () => {
  const filePath = 'harvests.test.txt';
  let subject: FileHarvestRepository;

  beforeAll((done) => {
    fs.open(filePath, 'w', (err) => {
      if (err) throw err;

      done();
    });
  });

  afterAll(() => {
    fs.unlinkSync(filePath);
  });

  describe('.add', () => {
    beforeAll((done) => {
      fs.writeFile(filePath, '', (err) => {
        if (err) throw err;

        subject = new FileHarvestRepository({ filePath });
        done();
      });
    });

    it('should add a new Harvest to the repository', () => {
      const harvest = new Harvest({
        locationId: LocationId.create(),
        date: new Date(),
        mushroomId: MushroomId.create(),
      });

      subject.add(harvest);

      expect(subject.count()).toEqual(1);
    });
  });

  describe('.findById', () => {
    beforeAll((done) => {
      fs.writeFile(filePath, '', (err) => {
        if (err) throw err;

        subject = new FileHarvestRepository({ filePath });
        done();
      });
    });

    it('should find existing Harvest from the repository', () => {
      const harvest = new Harvest({
        locationId: LocationId.create(),
        date: new Date(),
        mushroomId: MushroomId.create(),
      });

      subject.add(harvest);

      expect(subject.findById(harvest.id())).toBeDefined();
    });

    it('should not find Harvest which are not included in the repository', () => {
      const harvest = new Harvest({
        locationId: LocationId.create(),
        date: new Date(),
        mushroomId: MushroomId.create(),
      });

      expect(subject.findById(harvest.id())).toBeUndefined();
    });
  });

  describe('.filterBy', () => {
    const today = new Date();
    const pastDate = new Date('1985-12-19');
    const locationIdOne = LocationId.create();
    const locationOne = new Location({ id: locationIdOne, name: 'Item One', area: new Area({ coordinates: [] }) });
    const locationIdTwo = LocationId.create();

    const todayHarvest = new Harvest({ locationId: locationIdOne, date: today, mushroomId: MushroomId.create() });
    const pastHarvest = new Harvest({ locationId: locationIdTwo, date: pastDate, mushroomId: MushroomId.create() });

    beforeAll((done) => {
      fs.writeFile(filePath, '', (err) => {
        if (err) throw err;

        subject = new FileHarvestRepository({ filePath });
        subject.add(todayHarvest);
        subject.add(pastHarvest);

        done();
      });
    });

    it('should return all harvests when no params are defined', () => {
      const result = subject.filterBy();

      expect(result.length).toEqual(2);
    });

    it('should filter by date', () => {
      const result = subject.filterBy({ date: pastDate });

      expect(result.length).toEqual(1);
      expect(result[0].isEqual(pastHarvest)).toBeTruthy();
    });

    it('should filter by location', () => {
      const result = subject.filterBy({ location: locationOne });

      expect(result.length).toEqual(1);
      expect(result[0].isEqual(todayHarvest)).toBeTruthy();
    });
  });
});

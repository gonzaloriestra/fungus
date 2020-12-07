import * as fs from 'fs';

import { Harvest } from '../../../../src/Fungus/Harvests/Domain/Harvest';
import { FileHarvestRepository } from '../../../../src/Fungus/Harvests/Infrastructure/FileHarvestRepository';
import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';
import { MushroomId } from '../../../../src/Fungus/Shared/Domain/MushroomId';
// To-Do User HarvestMother in all places
import HarvestMother from '../Domain/HarvestMother';
import { HarvestId } from '../../../../src/Fungus/Harvests/Domain/HarvestId';

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
      const harvest = HarvestMother.random();

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
      const harvest = HarvestMother.random();

      subject.add(harvest);

      expect(subject.findById(harvest.id())).toBeDefined();
    });

    it('should not find Harvest which are not included in the repository', () => {
      const harvest = HarvestMother.random();

      expect(subject.findById(harvest.id())).toBeUndefined();
    });
  });

  describe('.filterBy', () => {
    const today = new Date();
    const pastDate = new Date('1985-12-19');
    const locationIdOne = LocationId.create();
    const locationIdTwo = LocationId.create();

    const todayHarvest = HarvestMother.create({
      id: HarvestId.create(),
      locationId: locationIdOne,
      date: today,
      mushroomId: MushroomId.create(),
      quantity: 2,
    });
    const pastHarvest = new Harvest({
      id: HarvestId.create(),
      locationId: locationIdTwo,
      date: pastDate,
      mushroomId: MushroomId.create(),
      quantity: 4,
    });

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

      expect(result.count()).toEqual(2);
    });

    it('should filter by date', () => {
      const result = subject.filterBy({ date: pastDate });

      expect(result.count()).toEqual(1);
      expect(result.toArray()[0].isEqual(pastHarvest)).toBeTruthy();
    });

    it('should filter by location', () => {
      const result = subject.filterBy({ locationId: locationIdOne });

      expect(result.count()).toEqual(1);
      expect(result.toArray()[0].isEqual(todayHarvest)).toBeTruthy();
    });
  });
});

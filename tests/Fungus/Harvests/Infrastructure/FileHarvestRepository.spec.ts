import * as fs from 'fs';

import { FileHarvestRepository } from '../../../../src/Fungus/Harvests/Infrastructure/FileHarvestRepository';

import HarvestMother from '../../../../applications/frontend/src/Fungus/Harvests/Domain/HarvestMother';

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
    const todayHarvest = HarvestMother.create({
      date: new Date(),
    });
    const pastDate = new Date('1985-12-19');
    const pastHarvest = HarvestMother.create({
      date: pastDate,
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
      const result = subject.filterBy({ locationId: todayHarvest.locationId() });

      expect(result.count()).toEqual(1);
      expect(result.toArray()[0].isEqual(todayHarvest)).toBeTruthy();
    });
  });
});
